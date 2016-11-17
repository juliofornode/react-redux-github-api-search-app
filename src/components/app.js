import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Steps from './steps';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3 style={{marginTop: '60'}}>The GitHub API Search App re-engineered with Redux</h3>
        <Steps />
        <Main />
      </div>
    );
  }
}
