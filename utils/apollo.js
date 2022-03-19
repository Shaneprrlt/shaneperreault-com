import fetch from "cross-fetch";
import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_GRAPHQL_API_URL, fetch }),
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
