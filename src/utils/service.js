const axios = require("axios");

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 2500,
  headers: { "X-Custom-Header": "foobar" }
});

export default client;
