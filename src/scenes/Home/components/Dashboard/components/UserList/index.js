import React from 'react';
import {Button, Table} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { changeUser } from "actions/userActions";

export default class UserList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.changeUser.bind(this);
    }

    changeUser(username) {
        this.context.store.dispatch(changeUser(username));
    }

    render() {
        const usersAsRow = this.props.users.map(u =>
            <tr key={u.id}>
                <td><Button bsStyle="link" onClick={() => this.changeUser(u.login)}>{u.login}</Button></td>
                <td>{u.followers.totalCount}</td>
            </tr>
        );
        return(
            <div>
                <h5>{this.props.title}</h5>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Followers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersAsRow}
                    </tbody>
                </Table>
            </div>
        );
    }
}

UserList.contextTypes = {
  store: PropTypes.object
};