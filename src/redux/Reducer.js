//here is where u will build the mechanics of ur code
import { initialState } from "./InitialState";
// import the func obj

//export the reducer state
export function reducer(state = initialState, action) {
  //inside the state create all the actions
  switch (action.type) {
    case "SET_API_DATA":
      return { ...state, simpsons: action.payload }; //retrun the old and than, the new

    case "DELETE": {
      const index = state.simpsons.findIndex(
        (item) => item.quote === action.payload
      );

      const simpsons = [...state.simpsons];
      simpsons.splice(index, 1);
      return { ...state, simpsons };
    }

    case "TOGGLE_LIKE": {
      const index = state.simpsons.findIndex(
        (item) => item.quote === action.payload
      );

      const simpsons = [...state.simpsons];
      simpsons[index].liked = !simpsons[index].liked;
      return { ...state, simpsons };
    }

    case "SET_SORT_ORDER": {
      return { ...state, sortOrder: action.payload };
    }

    default: // in case nothing is working
      console.log("reducer type not found, always  double-check ur spelling!!");
      return state;
  }
}
