import axios from 'axios';

class Api {

  getAllDevices(){
    return axios.get('/api/devices');
  }

  getDevice(id){
    return axios.get(`/api/devices/${id}`);
  }

  getDeviceReadings(id){
    return axios.get(`/api/devices/${id}/readings`);
  }

  deleteDevice(id){
    return axios.delete(`/api/devices/${id}`);  
  }

  devicesCount(){
    return axios.get('/api/devices/count');
  }

  addDevice(name){
    return axios.post('/api/devices', {name: name});    
  }
}

export default new Api();