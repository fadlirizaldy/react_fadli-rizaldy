import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://frank-puma-39.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "ziB3uPR2PiOsbm4FOvq6gPJHNr6sVT3YZsNLtopwLjcMRsxpOB5iegYkQxpI8whv",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://frank-puma-39.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "ziB3uPR2PiOsbm4FOvq6gPJHNr6sVT3YZsNLtopwLjcMRsxpOB5iegYkQxpI8whv",
      },
    },
  })
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
