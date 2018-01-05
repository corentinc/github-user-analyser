import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { properties } from 'project_properties.js'

export function createApolloClient() {
    const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });
    const middlewareLink = setContext(() => ({
        headers: {
            authorization: `Bearer ${properties.API_TOKEN}`
        }
    }));

    const link = middlewareLink.concat(httpLink);

    const client = new ApolloClient({
        link: link,
        cache: new InMemoryCache()
    });

    return client;
}