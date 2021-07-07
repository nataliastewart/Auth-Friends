import axios from "axios";

export const axiosWithAuth = () => {
  //get the token from localStorage
  const token = JSON.parse(localStorage.getItem("token"));

  //create a new instance of axios with the config object built into it
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: token,
    },
  });
};
