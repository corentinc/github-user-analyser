import React from 'react';
import {Table} from 'react-bootstrap';
import {FaStar} from 'react-icons/lib/fa';

export default class RepositoryList extends React.Component {
    render() {
        let repositoriesAsRow = this.props.repositories.map(r =>
            <tr key={r.id}>
                <td><a href={r.url} >{r.nameWithOwner}</a></td>
                <td>{r.description}</td>
                <td>{r.languages.nodes[0].name}</td>
                <td>{r.stargazers.totalCount}</td>
            </tr>
        );
        return(
            <div>
                <h5>{this.props.title}</h5>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th className="text-center">Main language</th>
                            <th className="text-center"><FaStar /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {repositoriesAsRow}
                    </tbody>
                </Table>
            </div>
        );
    }
}