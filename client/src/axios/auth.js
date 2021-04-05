import Axios from "axios";

export const authCheck = () =>
  Axios({
    method: "get",
    url: "http://localhost:5000/0900e5b2/auth",
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return;
    })
    .catch((e) => {
      throw e;
    });
