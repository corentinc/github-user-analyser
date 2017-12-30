import React from 'react';
import {format, parse, distanceInWords} from 'date-fns'

import './style.css';

export default class Summary extends React.Component {
    render(){
        let user = this.props.user;
        let createdDate = parse(user.createdAt);
        let createdDateAsString = format(createdDate, "MM/DD/YYYY");
        let createdDateDesc = distanceInWords(createdDate, new Date());

        return(
            <div className="container-fluid bg-light summary">
                <div className="row">
                    <div className="col-2 offset-2">
                        <a href={user.url} target="_blank">
                            <img className="img-thumbnail" src={user.avatarUrl}  alt="avatar" />
                        </a>
                    </div>
                    <div className="col-3">
                        <p class="font-weight-normal">{user.name}</p>
                        <p class="font-weight-light">{createdDateDesc} ({createdDateAsString})</p>
                    </div>
                </div>
            </div>
        );
    }
}
