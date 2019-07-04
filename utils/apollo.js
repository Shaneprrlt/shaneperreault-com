import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

const config = {
  link: new HttpLink({
    uri: process.env.REACT_GRAPHQL_API_URL
  })
};

export default withData(config);
