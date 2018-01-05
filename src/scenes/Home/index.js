import React from 'react';

import Header from './components/Header';
import BodyContainer from './BodyContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
          <BodyContainer/>
      </div>
    );
  }
}
