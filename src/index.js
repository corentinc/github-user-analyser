import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";

import App from './scenes/Home';
import registerServiceWorker from './registerServiceWorker';
import {createApolloClient} from "./services/graphql/index";
import store from "store";

const client = createApolloClient();

ReactDOM.render(
    <Provider store={store} >
        <ApolloProvider client={client} >
            <App />
        </ApolloProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
