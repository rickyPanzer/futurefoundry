import React, { Component } from 'react';


//Import components that compose the homeContainer components
import Home from './components/home'



export default class homeContainer extends Component {
  render() {
    return (
      <div id='home' className='home'>
        <Home />
        {/*<Services />*/}
      </div>
    );
  }
}