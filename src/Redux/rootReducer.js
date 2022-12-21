import { combineReducers } from "redux";
import connectReducer from "./connection/reducer";
import poolInfoReducer,{userRank} from "./poolInfo/reducer";
import remaintimeReducer from "./remaintime/reducer";
import withdrawInfoReduce from './withdrawDetail/reducer';
import latestDepositReducer from './latestDepositors/reducer'
const rootReducer = combineReducers({
  connect: connectReducer,
  poolInfo:poolInfoReducer,
  remaintime:remaintimeReducer,
  userRank:userRank,
  withDrawInfo:withdrawInfoReduce,
  latestDepositors:latestDepositReducer
});

export default rootReducer;
