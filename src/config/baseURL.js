import axios from "axios";

const token = localStorage.getItem("jwt-access-token");
export const baseUrl = axios.create({
  baseURL: "https://food-pagol.onrender.com/",
  headers: {
    ...(token && { Authorization: "Bearer " + token }),
  },
});
