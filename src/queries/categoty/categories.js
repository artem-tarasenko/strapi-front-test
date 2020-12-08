import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      Title
    }
  }
`;

export default CATEGORIES_QUERY;
