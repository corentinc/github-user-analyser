import { graphql } from "react-apollo";
import Dashboard from './index';
import viewerQuery from '../../../../data/queries/user.js';
var React = require('react');

const User = ({ data : {loading, error, user}}) => {
    if (loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return <Dashboard user={user} />;
};

export default graphql(viewerQuery, {
    options: ({ username }) => ({variables: {login: username}})
})(User);