import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Header from './Header';

@observer
class App extends Component {
  render() {
    return <div>
      <Header />
      <h1>Hello React</h1>
    </div>
  }
}

export default App;