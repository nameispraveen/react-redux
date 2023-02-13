const initialState = {
  count: 0,
};
 const CounterReducer = (state = initialState, action) => {
  switch (action) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload,
      };
    // break;
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.payload,
      };
    // break;
    default:
      return {
       count:state
      }
  }
};
export  default CounterReducer;