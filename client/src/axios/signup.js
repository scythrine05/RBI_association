import Axios from "axios";

export const getData = (id) =>
  Axios({
    method: "post",
    url: "http://localhost:5000/signup/getdata",
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
    url: "http://localhost:5000/signup/newuser",
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
    url: "http://localhost:5000/signup/existinguser",
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
