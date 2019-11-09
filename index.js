import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {BadWords} from './BadWordsFilter';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <BadWords />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
