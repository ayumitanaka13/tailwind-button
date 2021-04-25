export const SUBMIT_POST = "SUBMIT_POST";
export const submitPostAction = (postState) => {
  return {
    type: "SUBMIT_POST",
    payload: {
      isExisted: true,
      id: postState.id,
      title: postState.title,
    },
  };
};

export const DELETE_POST = "DELETE_POST";
export const deletePostAction = () => {
  return {
    type: "DELETE_POST",
    payload: {
      isExisted: true,
      id: "",
      title: "",
    },
  };
};
