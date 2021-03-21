import Axios from "axios";

export const userProfile = () =>
  Axios({
    method: "get",
    url: "http://localhost:5000/profile",
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
