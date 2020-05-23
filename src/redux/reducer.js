import * as actions from "./action";

export const reducer = (location = [], action) => {
  switch (action.type) {
    case actions.ADDCART:
      const Cartvalue = location.filter((item) => item.id === action.id);
      if (Cartvalue.length === 0) {
        return [...new Set([...location, action.payload])];
      }
      // return {...location, action.payload}
      break;
    default:
      return location;
  }
};
