import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

export function createApolloClient() {
    const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });

    const middlewareLink = setContext(() => ({
        headers: {
            authorization: "Bearer d531fd50490a7437e7e556cbddce75a88c0f3ccb"
        }
    }));

    const link = middlewareLink.concat(httpLink);

    const client = new ApolloClient({
        link: link,
        cache: new InMemoryCache()
    });

    return client;
}