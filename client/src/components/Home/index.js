import React, { Component } from 'react';
import api from 'api';

class Home extends Component {

  componentDidMount(){
    api.getAllDevices().then( response => {
      console.log(response.data);
    });

    api.getDeviceReadings('r1b7gGke7').then( response => {
      console.log(response.data);
    });

    api.devicesCount().then( response => {
      console.log(response.data);
    });
    
    //Utils.addDevice('New')

    //Utils.getDevice('rJaIkZNlX');
    //Utils.deleteDevice('rJaIkZNlX');
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
