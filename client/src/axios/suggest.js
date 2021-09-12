import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export const postSuggest = async (name, email, subject, message) => {
  try {
    await Axios({
      method: "post",
      url: `${apiUrl}/0900e5b2/suggest`,
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

export const postContact = async (name, email, message) => {
  try {
    await Axios({
      method: "post",
      url: `${apiUrl}/0900e5b2/suggest/contact`,
      headers: "",
      data: {
        Name: name,
        Email: email,
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
    url: `${apiUrl}/0900e5b2/suggest/data`,
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
