import React, { Component } from 'react';
import HelloUser from './Components/HelloUser/HelloUser';

class App extends Component {

  render() {
    return (
      <div>

        <p>Hello World!</p>
        <HelloUser name="Gabriel Suassuna"/>
      </div>
    );
  }

}

export default App;