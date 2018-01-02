import React from 'react';
import {format, parse, distanceInWords} from 'date-fns'
import './style.css';

export default class UserSummary extends React.Component {
    render() {
        let user = this.props.user;
        let createdDate = parse(user.createdAt);
        let createdDateAsString = format(createdDate, "MM/DD/YYYY");
        let createdDateDesc = distanceInWords(createdDate, new Date());

        return(
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                <img className="img-thumbnail rounded mx-auto d-block mb-3" src={user.avatarUrl}  alt="avatar" />
                <p className="font-weight-normal text-sm-center">{user.name}</p>
                <p className="font-weight-light text-sm-center">{createdDateDesc} ({createdDateAsString})</p>
            </nav>);
    }
}