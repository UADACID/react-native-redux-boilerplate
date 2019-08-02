import axios from "axios";

import { config } from "./statics";

const client = axios.create({
  baseURL: config.BASE_API_URL,
  timeout: config.TIME_OUT,
  headers: { "X-Custom-Header": "foobar" }
});

export default client;
