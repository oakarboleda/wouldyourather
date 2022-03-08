import React from 'react';
import store from './app/store';
import {Provider} from 'react-redux';

import './App.css';

function App() {
  return (
      <Provider store={store}>
    <div className="App">
     <Header

    </div>
      </Provider>
  );
}

export default App;
