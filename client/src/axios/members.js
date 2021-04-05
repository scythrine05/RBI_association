import Axios from "axios";

export const pendingMembers = () =>
  Axios({
    method: "get",
    url: "http://localhost:5000/0900e5b2/members/pending",
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
    url: "http://localhost:5000/0900e5b2/members/approved",
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
    url: "http://localhost:5000/0900e5b2/members/admin",
    headers: "",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
