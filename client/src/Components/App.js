import React, { Component, Fragment } from 'react';
import Header from './Layout/Header';
import PagesTabs from './Layout/PagesTabs'
//import { Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <PagesTabs />
      </Fragment>
    );
  }

}

