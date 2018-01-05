import { graphql } from "react-apollo";

import UserSummary from './index';
import viewerQuery from 'data/queries/user.js';
import Loader from 'components/Loader';

var React = require('react');

const User = (props) => {
    if (props.data.loading) {
        return <Loader />;
    }
    if (props.data.error) {
        return <p>{props.data.error.message}</p>;
    }
    return <UserSummary user={props.data.user} />;
};

export default graphql(viewerQuery, {
    options: ({ username }) => ({variables: {login: username}})
})(User);