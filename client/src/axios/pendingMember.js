import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
export const approve = (Id) =>
  Axios({
    method: "post",
    url: `${apiUrl}/0900e5b2/members/pending/approve`,
    headers: "",
    withCredentials: true,
    data: {
      Id: Id,
    },
  })
    .then((res) => {
      return null;
    })
    .catch((e) => {
      throw e;
    });

export const disapprove = (Id) =>
  Axios({
    method: "post",
    url: `${apiUrl}/0900e5b2/members/pending/disapprove`,
    headers: "",
    withCredentials: true,
    data: {
      Id: Id,
    },
  })
    .then((res) => {
      return null;
    })
    .catch((e) => {
      throw e;
    });
