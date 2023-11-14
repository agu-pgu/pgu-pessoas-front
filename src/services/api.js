import axios from "axios";

const api = axios.create({
  baseURL: 'http://172.17.24.210:8102', // API em DEVOP
    //baseURL: 'http://localhost:numero', // API em DEVOP

});

export default api;