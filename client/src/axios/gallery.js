import Axios from "axios";

export const postImages = async (file) => {
  try {
    let fileData = await Axios({
      method: "post",
      url: "http://localhost:5000/0900e5b2/gallery/upload",
      headers: "",
      data: file,
      withCredentials: true,
    });
    fileData = fileData.data.key ? fileData.data.key : null;
    await Axios({
      method: "post",
      url: "http://localhost:5000/0900e5b2/gallery",
      headers: "",
      data: {
        File: fileData,
      },
      withCredentials: true,
    });
  } catch (e) {
    throw e;
  }
};

export const getImages = () =>
  Axios({
    method: "get",
    url: "http://localhost:5000/0900e5b2/gallery",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
