import * as actions from "./action";

export const reducer = (location = [], action) => {
  switch (action.type) {
    case actions.ADDCART:
      const Cartvalue = location.filter(
        (item) => item.id === action.payload.id
      );
      if (Cartvalue.length === 0) {
        return [...location, action.payload];
      }

    case actions.REMOVECART:
      const removeValue = location.filter(
        (item) => item.id !== action.payload.id
      );

      return [...removeValue];

    default:
      return location;
  }
};
