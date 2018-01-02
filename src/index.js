import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";

import App from './scenes/Home/App';
import registerServiceWorker from './registerServiceWorker';
import {createApolloClient} from "./services/graphql/index";

const client = createApolloClient();

ReactDOM.render(
    <ApolloProvider client={client} >
        <App />
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
