import React, { Component } from 'react';
import Preload from './Preload/Preload';

class App extends Component {

  state = {loaded : false}

  componentDidMount() {
    // demo
    setTimeout(() => {
      this.setState({loaded : true})
    }, 500);

    // window.addEventListener('load', this.setState({loaded : true}));
  }

  render() {
    return (<Preload loaded={this.state.loaded} />);
  }
}

export default App;