import React from 'react';
import { Route } from 'wouter';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faPlus,
  faCogs,
  faComments,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';

import HomePage from './pages/Home';
import NextPage from './pages/Next';

import { TokenContextProvider } from './context/TokenContext';

import './App.css';

library.add(faBars, faPlus, faCogs, faComments, faSignInAlt);

export default function App() {
  return (
    <TokenContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />
          <Route component={HomePage} path="/" />
          <Route component={NextPage} path="/page/:keyword" />
        </section>
      </div>
    </TokenContextProvider>
  );
}
