import Axios from "axios";

export const postImages = async (file) => {
  try {
    let fileData = await Axios({
      method: "post",
      url: "http://localhost:5000/gallery/upload",
      headers: "",
      data: file,
      withCredentials: true,
    });
    fileData = fileData.data.filename ? fileData.data.filename : null;
    await Axios({
      method: "post",
      url: "http://localhost:5000/gallery",
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
