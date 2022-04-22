import JsonPlaceholder from "../apis/JsonPlaceholder";

export const fetchPost = () => {
  return async (dispatch) => {
    const response = await JsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POST",
      payload: response,
    });
  };
};
