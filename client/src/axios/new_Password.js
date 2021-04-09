import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
export const newPassword = (oldPass, newPass) =>
  Axios({
    method: "post",
    url: `${apiUrl}/0900e5b2/profile/new_password`,
    headers: "",
    withCredentials: true,
    data: {
      oldPass: oldPass,
      newPass: newPass,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
