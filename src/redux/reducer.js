import * as actions from "./action";

//SavedReducer
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

// //userReducer
// export const userReducer = (currentUser = null, action) => {
//   switch (action.type) {
//     case actions.SETCURRENTUSER:
//       return {
//         ...currentUser,
//         currentUser: action.payload,
//       };
//     default:
//       return currentUser;
//   }
// };
