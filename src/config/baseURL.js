import axios from "axios";

const token = localStorage.getItem("jwt-access-token");
export const baseUrl = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    ...(token && { Authorization: "Bearer " + token }),
  },
});
