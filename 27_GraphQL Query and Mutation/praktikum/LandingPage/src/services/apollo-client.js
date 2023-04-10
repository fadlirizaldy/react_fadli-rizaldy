import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://frank-puma-39.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "ziB3uPR2PiOsbm4FOvq6gPJHNr6sVT3YZsNLtopwLjcMRsxpOB5iegYkQxpI8whv",
  },
});

export default client;
