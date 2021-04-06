import Axios from "axios";

export const postSuggest = async (name, email, subject, message) => {
  try {
    await Axios({
      method: "post",
      url: "http://localhost:5000/0900e5b2/suggest",
      headers: "",
      data: {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
      },
      withCredentials: true,
    });
  } catch (e) {
    throw e;
  }
};

export const getData = () =>
  Axios({
    method: "get",
    url: "http://localhost:5000/0900e5b2/suggest/data",
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
