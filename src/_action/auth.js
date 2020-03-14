import { GET_LOGIN, REGISTER } from "../config/constants";
import { API } from "../config/api";

export const register = data => {
  console.log("data register", data);
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post("/register", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      return res.data;
    }
  };
};

export const login = data => {
  console.log(data);
  return {
    type: GET_LOGIN,
    payload: async () => {
      const res = await API.post("/login", data);
      console.log(res);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      return res.data;
    }
  };
};
