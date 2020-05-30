export const ADDCART = "ADDCART";
export const REMOVECART = "REMOVECART";
export const SETCURRENTUSER = "SETCURRENTUSER";

export const addCart = (item) => {
  return {
    type: ADDCART,
    payload: item,
  };
};

export const removeCart = (item) => {
  return {
    type: REMOVECART,
    payload: item,
  };
};
