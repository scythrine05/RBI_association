import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
export const getData = (id) =>
  Axios({
    method: "post",
    url: `${apiUrl}/0900e5b2/signup/getdata`,
    headers: "",
    data: {
      SamadhanID: id,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });

export const newUser = (userData) =>
  Axios({
    method: "post",
    url: `${apiUrl}/0900e5b2/signup/newuser`,
    headers: "",
    data: {
      userData: userData,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });

export const existingUser = (userData) =>
  Axios({
    method: "post",
    url: `${apiUrl}/0900e5b2/signup/existinguser`,
    headers: "",
    data: {
      userData: userData,
    },
  })
    .then(() => {
      return null;
    })
    .catch((e) => {
      console.log(e);
    });
