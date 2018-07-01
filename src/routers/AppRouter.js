// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

// import { Header } from '../Header/Header';
import HomePage from '../components/HomePage';
import MovieList from '../components/shared/MovieList';

// COMPONENT

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      {/* <Header /> */}
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/movies' component={MovieList} />
        <Route path='/whishlist' component={MovieList} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
