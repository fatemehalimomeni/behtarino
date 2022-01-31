import axios from "axios";
import product from "./product";

const path = "https://fakestoreapi.com/";

const Server = axios.create({
  baseURL: path,
  timeout: 10000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

Server.interceptors.request.use(
  (config) => {
    config.params["api_key"] = "public";
    config.params["time"] = new Date().getTime();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  product
};

export { Server };
