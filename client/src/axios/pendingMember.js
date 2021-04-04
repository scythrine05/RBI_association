import Axios from "axios";

export const approve = (Id) =>
  Axios({
    method: "post",
    url: "http://localhost:5000/members/pending/approve",
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
    url: "http://localhost:5000/members/pending/disapprove",
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
