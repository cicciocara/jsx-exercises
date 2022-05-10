import React from 'react';
import ReactDOM from 'react-dom';
import { Summer } from './Jsx-05';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Summer a={5} b={10} />
      </div>
    );
  }
}
