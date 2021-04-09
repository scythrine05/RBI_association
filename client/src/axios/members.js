import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export const pendingMembers = () =>
  Axios({
    method: "get",
    url: `${apiUrl}/0900e5b2/members/pending`,
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });

export const approvedMembers = () =>
  Axios({
    method: "get",
    url: `${apiUrl}/0900e5b2/members/approved`,
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });

export const admin = () =>
  Axios({
    method: "get",
    url: `${apiUrl}/0900e5b2/members/admin`,
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
