import { GET_TICKET } from "../config/constants";
import { API } from "../config/api";

export const getTicket = data => {
  console.log("data ticket", data);
  return {
    type: GET_TICKET,
    payload: async () => {
      const res = await API.get(`/trains?dateStart=${data}`);

      return res.data;
    }
  };
};
