import Axios from "axios";

export const newPassword = (oldPass, newPass) =>
  Axios({
    method: "post",
    url: "http://localhost:5000/0900e5b2/profile/new_password",
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
