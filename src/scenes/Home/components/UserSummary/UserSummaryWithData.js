import { graphql } from "react-apollo";

import UserSummary from './index';
import userSummaryQuery from 'data/queries/userSummary.js';
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

export default graphql(userSummaryQuery, {
    options: ({ username }) => ({variables: {login: username}})
})(User);