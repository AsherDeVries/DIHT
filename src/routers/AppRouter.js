// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// IMPORT PROJECT REFERENCES

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import HaveItemsContainer from '../containers/HaveItemsContainer';
import WishlistContainer from '../containers/WishlistContainer';

// COMPONENT

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Container>
        <Switch>
          <Route path='/' component={HomePage} exact={true} />
          <Route path='/movies' component={HaveItemsContainer} />
          <Route path='/wishlist' component={WishlistContainer} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Fragment>
  </BrowserRouter>
);
