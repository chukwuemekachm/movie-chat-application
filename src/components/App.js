import React from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import ErrorBoundary from '../hocs/ErrorBoundary';
import Provider from '../hocs/Provider';
import { GlobalCSS } from '../settings/_global.css';
import Table from './Table';
import Comments from './Comments';

function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <App.Wrapper>
          <GlobalCSS />
          <Router>
            <Switch>
              <Route path="/" exact component={Table} />
              <Route path="/:movieID/comments" exact component={Comments} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </App.Wrapper>
      </Provider>
    </ErrorBoundary>
  );
}

App.Wrapper = styled.div``;

export default App;
