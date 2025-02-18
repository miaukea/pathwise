import axios from 'axios';

const getTrips = () => {
  return axios.get('https://my-json-server.typicode.com/howellea/pathwisedata/trips');
};

const getDestinaton = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users/');
};

const getSingleDestination = (paramId) => {
  return axios.get(`https://my-json-server.typicode.com/howellea/pathwisedata/destinations${paramId}`);
};

export default {
  getTrips,
  getSingleDestination,
};
