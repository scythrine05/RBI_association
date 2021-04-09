import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export const postComms = async (heading, body, file) => {
  try {
    let fileData = await Axios({
      method: "post",
      url: `${apiUrl}/0900e5b2/communication/upload`,
      headers: "",
      data: file,
      withCredentials: true,
    });
    fileData = fileData.data.key ? fileData.data.key : null;
    await Axios({
      method: "post",
      url: `${apiUrl}/0900e5b2/communication`,
      headers: "",
      data: {
        Heading: heading,
        Body: body,
        File: fileData,
      },
      withCredentials: true,
    });
  } catch (e) {
    throw e;
  }
};

export const getComms = () =>
  Axios({
    method: "get",
    url: `${apiUrl}/0900e5b2/communication`,
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });

export const getFComms = () =>
  Axios({
    method: "get",
    url: `${apiUrl}/0900e5b2/communication/front`,
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
