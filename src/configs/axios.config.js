import axios from "axios";

const instance = axios.create({
    baseURL: 'https://openlibrary.org',
    headers: {'Content-Type': 'application/json'}
  });

export default instance;