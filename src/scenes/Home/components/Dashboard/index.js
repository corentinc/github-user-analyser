import React from 'react';

import './style.css';
import UserSummary from "../UserSummary/index";

export default class Dashboard extends React.Component {
  render(){
    return(
        <div className="container-fluid">
          <div className="row">
            <UserSummary user={this.props.user}/>
            <main className="col-sm-9 ml-sm-auto col-md-10 pt-3 main" role="main">
              <h1>Dashboard of {this.props.user.name}</h1>
            </main>
          </div>
        </div>
    );
  }
}
