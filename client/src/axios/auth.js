import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export const authCheck = () =>
  Axios({
    method: "get",
    url: `${apiUrl}/08z1euop/auth`,
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return;
    })
    .catch((e) => {
      throw e;
    });
