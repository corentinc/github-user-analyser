import React from 'react';
import { Image } from 'react-bootstrap';
import {parse, distanceInWords} from 'date-fns'

import './style.css';

export default class Dashboard extends React.Component {
  render(){
      let user = this.props.user;
      let createdDate = parse(user.createdAt);
      let createdDateDesc = distanceInWords(createdDate, new Date());

      return(
          <div className="sidebar">
              <Image src={user.avatarUrl} thumbnail className="avatar"/>
              <p>{user.name}</p>
              <p>{createdDateDesc}</p>
          </div>
      );
  }
}
