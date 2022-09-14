import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { username, password } });
    // await mutate({ variables: { username, password } });
    console.log(data);
  };

  return [signIn, result];
};
