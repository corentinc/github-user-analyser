import React from 'react';

import './App.css';
import Header from './components/Header';
import DashboardWithData from './components/Dashboard/DashboardWithData';

class App extends React.Component {

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
    let content = "";
    if (this.state.query === "") {
      content = "search it";
    } else {
      content = <DashboardWithData username={this.state.query} />;
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
