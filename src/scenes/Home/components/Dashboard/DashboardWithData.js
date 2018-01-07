import { graphql } from "react-apollo";
import Dashboard from './index';
import userDashboardQuery from 'data/queries/userDashboard.js';
import Loader from 'components/Loader';
var React = require('react');

const User = (props) => {
    if (props.data.loading) {
        return <Loader />;
    }
    if (props.data.error) {
        return <p>{props.data.error.message}</p>;
    }
    return <Dashboard user={props.data.user} />;
};

export default graphql(userDashboardQuery, {
    options: ({ username }) => ({variables: {login: username}})
})(User);