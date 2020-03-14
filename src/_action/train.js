import { GET_TRAIN, GET_ALL_TRAIN } from "../config/constants";
import { API } from "../config/api";

export const getTrain = data => {
  console.log("data ticket", data);
  return {
    type: GET_TRAIN,
    payload: async () => {
      const res = await API.post("/train");
      const { data } = res.data;
      return data;
    }
  };
};

export const getAllTrain = data => {
  console.log("data train", data);
  return {
    type: GET_ALL_TRAIN,
    payload: async () => {
      const res = await API.get("/trains");
      const { data } = res.data;
      return data;
    }
  };
};
