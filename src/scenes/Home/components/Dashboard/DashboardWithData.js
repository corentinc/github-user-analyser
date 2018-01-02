import { graphql } from "react-apollo";
import Dashboard from './index';
import viewerQuery from 'data/queries/user.js';
import Loader from 'components/Loader';
var React = require('react');

const User = (props) => {
    if (props.data.loading) {
        return <Loader />;
    }
    if (props.data.error) {
        return <p>{props.data.error.graphQLErrors[0].type}</p>;
    }
    return <Dashboard user={props.data.user} />;
};

export default graphql(viewerQuery, {
    options: ({ username }) => ({variables: {login: username}})
})(User);