import Axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
export const postPolls = async (question, options) => {
  try {
    await Axios({
      method: "post",
      url: `${apiUrl}/0900e5b2/polls`,
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
    url: `${apiUrl}/0900e5b2/polls`,
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
    url: `${apiUrl}/0900e5b2/polls/vote`,
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
