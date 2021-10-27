import ACTIONS from "./ACTION_CONSTANT";
import {setTimeAPI} from "../services/apis";
const setTime = (time) => {
  return {
    type: ACTIONS.CLOCK_SET_CURRENT_TIME,
    payload: time
  }
}

const setCurrentTime = () => {
  return dipatch => setTimeAPI()
  .then(result => dipatch(setTime(result)))
}
export {setCurrentTime};