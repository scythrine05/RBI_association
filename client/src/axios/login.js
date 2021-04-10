import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
export const loginUser = (email, password) =>
  Axios({
    method: "post",
    url: `${apiUrl}/0900e5b2/login`,
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
      console.clear();
      throw e;
    });
export const logoutUser = () =>
  Axios.delete(`${apiUrl}/0900e5b2/login`, {
    withCredentials: true,
  });
