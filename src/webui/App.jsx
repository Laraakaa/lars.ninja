import React, { Component } from 'react';

import registerServiceWorker from './registerServiceWorker';
import { AppHeader } from './Layout';
import { AppContent } from './Content';

import logo from '../resources/image/logo.svg';
import './style/index.css';
import './style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    registerServiceWorker();
  }

  render() {
    return (
      <div className="App">
        <AppHeader title="Welcome" />
        <AppContent />
      </div>
    );
  }
}

export default App;
