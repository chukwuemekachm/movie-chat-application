import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import ErrorBoundary from '../hocs/ErrorBoundary';
import Provider from '../hocs/Provider';
import { GlobalCSS } from '../settings/_global.css';
import Table from './Table';

function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <App.Wrapper>
          <GlobalCSS />
          <NavBar />
          <Table />
        </App.Wrapper>
      </Provider>
    </ErrorBoundary>
  );
}

App.Wrapper = styled.div``;

export default App;
