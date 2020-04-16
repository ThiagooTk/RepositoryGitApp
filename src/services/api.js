import axios from "axios";

const api = axios.create({
  baseURL: "http://api.github.com/", // nossa base que vai ser chamada em todas as requisições
});

export default api;
