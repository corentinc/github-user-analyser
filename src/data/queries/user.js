import gql from "graphql-tag";

export default gql`
   query UserQuery($login: String!) {
      user(login: $login) {
        name
        avatarUrl
        createdAt
        url
      }
   }
 `;