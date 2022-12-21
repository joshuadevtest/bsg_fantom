import { ActionTypes } from "../types";
import {
  financeAppContractAddress,
  financeAppContract_Abi,
} from "../../utils/contracts";
import Web3 from "web3";
const web3Supply = new Web3("https://rpcapi.fantom.network/");
export const getpoolDetail = () => {
  return async (dispatch) => {
    let obj = {};
    try {
      let financeAppcontractOf = new web3Supply.eth.Contract(
        financeAppContract_Abi,
        financeAppContractAddress
      );
      let Silver = await financeAppcontractOf.methods.Silver().call();
      obj = { ...obj, Silver };

      let Gold = await financeAppcontractOf.methods.Gold().call();
      Gold = web3Supply.utils.fromWei(Gold);
      obj = { ...obj, Gold };

      let Platinum = await financeAppcontractOf.methods
        .Platinum()
        .call();
      Platinum = web3Supply.utils.fromWei(Platinum);
      obj = { ...obj, Platinum };

      let topPool = await financeAppcontractOf.methods.topPool().call();
      topPool = web3Supply.utils.fromWei(topPool);
      obj = { ...obj, topPool };
      dispatch({ type: ActionTypes.POOL_DETAIL, payload: obj });
    } catch (e) {
      console.error(e);
    }
  };
};
