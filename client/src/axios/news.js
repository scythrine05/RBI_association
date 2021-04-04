import Axios from "axios";

export const postNews = async (heading, body, file) => {
  try {
    let fileData = await Axios({
      method: "post",
      url: "http://localhost:5000/news/upload",
      headers: "",
      data: file,
      withCredentials: true,
    });
    fileData = fileData.data.filename ? fileData.data.filename : null;
    await Axios({
      method: "post",
      url: "http://localhost:5000/news",
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

export const getNews = () =>
  Axios({
    method: "get",
    url: "http://localhost:5000/news",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
