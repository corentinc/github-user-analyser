import React from 'react';
import {Table} from 'react-bootstrap';

export default class UserList extends React.Component {
    render() {
        const usersAsRow = this.props.users.map(u =>
            <tr key={u.id}>
                <td><a href={u.url} target="_blank">{u.login}</a></td>
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