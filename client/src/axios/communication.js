import Axios from "axios";

export const postComms = async (heading, body, file) => {
  try {
    let fileData = await Axios({
      method: "post",
      url: "http://localhost:5000/0900e5b2/communication/upload",
      headers: "",
      data: file,
      withCredentials: true,
    });
    fileData = fileData.data.filename ? fileData.data.filename : null;
    await Axios({
      method: "post",
      url: "http://localhost:5000/0900e5b2/communication",
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
    url: "http://localhost:5000/0900e5b2/communication",
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
    url: "http://localhost:5000/0900e5b2/communication/front",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
