import ACTION from "@src/actions/ACTION_CONSTANT";
const intialState = {
  root: null
};
const treeReducer = (state = intialState, action) => {
  console.log(action);
  switch(action.type) {
    case ACTION.TREE_GET_TREE_DATA:
      return {
        ...state,
        root: action.payload
      }
    default:
      return state;
  }
};
export default treeReducer;