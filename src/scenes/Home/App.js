import React from 'react';

import Header from './components/Header';
import DashboardWithData from './components/Dashboard/DashboardWithData';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      query: ""
    };

    this.searchFor = this.searchFor.bind(this);
  }

  searchFor(username) {
    this.setState({query: username});
  }

  render() {
      let main = "Empty text";
      if (this.state.query !== "") {
          main = <DashboardWithData username={this.state.query} />;
      }
    return (
      <div>
        <Header onSearch={this.searchFor} />
          {main}
      </div>
    );
  }
}
