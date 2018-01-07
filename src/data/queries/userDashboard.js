import gql from "graphql-tag";

export default gql`
   query UserDashboardQuery($login: String!) {
      user(login: $login) {
        ownRepositories : repositories(isFork: false) {
            totalCount
        }
      }
   }
 `;