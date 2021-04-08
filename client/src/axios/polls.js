import Axios from "axios";

export const postPolls = async (question, options) => {
  try {
    await Axios({
      method: "post",
      url: "http://localhost:5000/0900e5b2/polls",
      headers: "",
      data: {
        Question: question,
        Options: options,
      },
      withCredentials: true,
    });
  } catch (e) {
    throw e;
  }
};

export const getPolls = () =>
  Axios({
    method: "get",
    url: "http://localhost:5000/0900e5b2/polls",
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });

export const votePolls = (option, id) =>
  Axios({
    method: "post",
    url: "http://localhost:5000/0900e5b2/polls/vote",
    withCredentials: true,
    data: {
      PId: id,
      Option: option,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
