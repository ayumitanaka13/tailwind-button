export const SUBMIT_POST = "SUBMIT_POST";
export const submitPostAction = (postState) => {
  return {
    type: "SUBMIT_POST",
    payload: {
      id: postState.id,
      code: postState.code,
    },
  };
};

export const DELETE_POST = "DELETE_POST";
export const deletePostAction = () => {
  return {
    type: "DELETE_POST",
    payload: {
      id: "",
      code: "",
    },
  };
};
