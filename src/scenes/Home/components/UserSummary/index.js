import React from 'react';
import { Image } from 'react-bootstrap';
import {parse, distanceInWords} from 'date-fns'
import {FaUser, FaSignIn} from 'react-icons/lib/fa';

import './style.css';

export default class UserSummary extends React.Component {
  render(){
      let user = this.props.user;
      let createdDate = parse(user.createdAt);
      let createdDateDesc = distanceInWords(createdDate, new Date());

      return(
          <div className="UserSummary">
              <Image src={user.avatarUrl} thumbnail className="avatar mb-3"/>
              <br />
              <span className="desc">
                <FaUser/><span className="font-weight-bold">{user.name}</span>
                  <br />
                <FaSignIn/><span className="font-weight-light">{createdDateDesc}</span>
              </span>
          </div>
      );
  }
}
