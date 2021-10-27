import ACTION from "@src/actions/ACTION_CONSTANT";
const intialState = {
  currenttime: 0
};
const clockReducer = (state = intialState, action) => {
  console.log(action);
  switch(action.type) {
    case ACTION.CLOCK_SET_CURRENT_TIME:
      return {
        ...state,
        currenttime: action.payload
      }
    default:
      return state;
  }
};
export default clockReducer;