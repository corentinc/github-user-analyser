import React from 'react';

import Loader from 'components/Loader';
import Summary from './components/Summary'
import './style.css';

export default class Dashboard extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render(){
    let content = null;
    if (!this.state.loading) {
      content = <Summary user={this.props.user} />;
    } else {
      content = <Loader />;
    }

    return(
      <div>
        {content}
      </div>
    );
  }
}
