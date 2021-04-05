import Axios from "axios";

export const loginUser = (email, password) =>
  Axios({
    method: "post",
    url: "http://localhost:5000/0900e5b2/login",
    headers: "",
    data: {
      Email: email,
      Password: password,
    },
    withCredentials: true,
  })
    .then((res) => {
      return;
    })
    .catch((e) => {
      throw e;
    });
export const logoutUser = () =>
  Axios.delete("http://localhost:5000/0900e5b2/login", {
    withCredentials: true,
  });
