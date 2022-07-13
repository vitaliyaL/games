export const actionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
  };
  export const inc = (payload) => {
      return {type: actionTypes.INCREMENT,payload}
  };
  export const dec = (payload) => {
      return {type: actionTypes.DECREMENT,payload}
  };
