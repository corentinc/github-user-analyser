import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

export function createApolloClient() {
    const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });

    const middlewareLink = setContext(() => ({
        headers: {
            authorization: "Bearer 175de1551495d01f3916fd4cb4f4f229a20005b2"
        }
    }));

    const link = middlewareLink.concat(httpLink);

    const client = new ApolloClient({
        link: link,
        cache: new InMemoryCache()
    });

    return client;
}