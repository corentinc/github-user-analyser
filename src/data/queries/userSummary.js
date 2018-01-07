import gql from "graphql-tag";

export default gql`
   query UserSummaryQuery($login: String!) {
      user(login: $login) {
        name
        avatarUrl
        createdAt
        url
      }
   }
 `;