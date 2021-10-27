import ACTIONS from "./ACTION_CONSTANT";
import {getTreeDataAPI} from "@src/services/apis";
const setTree = (payload) => ({
  type: ACTIONS.TREE_GET_TREE_DATA,
  payload,
})

const setTreeAction = () => {
  return disptach => getTreeDataAPI()
  .then((result) => disptach(setTree(result)))
}
export {setTreeAction};