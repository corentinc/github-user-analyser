import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import * as api from '../../services/api'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user : {}
    };

    this.searchFor = this.searchFor.bind(this);
  }

  searchFor(username) {
    api.getUserInfo(username, (res) => {
      let user = res.data;
      this.setState({
        user : {
          name: user.name,
          avatar: user.avatar_url,
          repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          htmlUrl: user.html_url,
          createdAt: user.created_at,
          notFound: user.message
        }
      })
    },
    (err) => {
      this.setState({
        user: {}
      })
    });
  }

  render() {
    let userFound = Object.keys(this.state.user).length;
    let content = null;
    if (userFound) {
      content = <Dashboard user={this.state.user} />;
    }

    return (
      <div className="App">
        <h1>Github profile analyser</h1>
        <Header onSearch={this.searchFor}/>
          {content}
      </div>
    );
  }
}

export default App;
