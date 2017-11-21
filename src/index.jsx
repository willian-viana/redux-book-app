import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


class App extends Component {
  render() {
    return <p> Hello World </p>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
