import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import Constants from "expo-constants";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: Constants.manifest.extra.uri,
  // onError: ({ networkError, graphQLErrors }) => {
  //   console.log("graphQLErrors", graphQLErrors);
  //   console.log("networkError", networkError);
  // },
});

const createApolloClient = () => {
  return new ApolloClient({
    link: from([errorLink, httpLink]),
    // link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
