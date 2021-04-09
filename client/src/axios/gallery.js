import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export const postImages = async (file) => {
  try {
    let fileData = await Axios({
      method: "post",
      url: `${apiUrl}/0900e5b2/gallery/upload`,
      headers: "",
      data: file,
      withCredentials: true,
    });
    fileData = fileData.data.key ? fileData.data.key : null;
    await Axios({
      method: "post",
      url: `${apiUrl}/0900e5b2/gallery`,
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
    url: `${apiUrl}/0900e5b2/gallery`,
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
