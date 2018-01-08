import gql from "graphql-tag";

export default gql`
   query UserDashboardQuery($login: String!) {
      user(login: $login) {
        ownRepositories : repositories(isFork: false) {
            totalCount
        }
        followers(first: 5) {
            nodes {
              ...FragmentUser
            }
        }
        following(first: 5) {
          nodes {
            ...FragmentUser
          }
        }
      }
   }
    fragment FragmentUser on User {
        id
        login
        name
        url
        avatarUrl
        followers {
            totalCount
        }
    }
 `;