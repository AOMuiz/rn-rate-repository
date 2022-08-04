import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  // const [repositories, setRepositories] = useState(data);
  // const [loading, setLoading] = useState(false);

  // const fetchRepositories = async () => {
  //   setLoading(true);

  //   // Replace the IP address part with your own IP address!
  //   // exp://127.0.0.1:19000
  //   // exp://192.168.43.129:19000
  //   const response = await fetch("http://127.0.0.1:5000/api/repositories", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(response);
  //   const json = await response.json();
  //   console.log(json);

  //   setLoading(false);
  //   setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  return { repositories: data, loading, error };
};

export default useRepositories;
