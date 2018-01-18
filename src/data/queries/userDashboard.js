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
        repositoriesContributedTo(first: 5, orderBy: {field: STARGAZERS, direction: DESC}) {
              totalCount
              nodes {
                id
                nameWithOwner
                url
                description
                stargazers {
                  totalCount
                }
                languages(first:1, orderBy: {field: SIZE, direction: DESC}) {
                    nodes {
                        name
                    }
                }
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