import { ActionTypes } from "../types";
import {
  financeAppContractAddress,
  financeAppContract_Abi,
} from "../../utils/contracts";
import moment from "moment";
import Web3 from "web3";
const web3Supply = new Web3("https://rpcapi.fantom.network/");
export const getLatestDepositors = () => {
  return async (dispatch) => {
    try {
      const web3 = window.web3;
      let financeAppcontractOf = new web3Supply.eth.Contract(
        financeAppContract_Abi,
        financeAppContractAddress
      );
      let depositLength = await financeAppcontractOf.methods
        .getDepositorsLength()
        .call();
      let dd = {};
      for (let i = 0; i < depositLength; i++) {
        let depositAddress = await financeAppcontractOf.methods
          .depositors(i)
          .call();
        let next = await financeAppcontractOf.methods
          .getOrderLength(depositAddress)
          .call();
        dd[depositAddress] = next;
      }
      // console.log("wIT FOR ME", dd, Object.keys(dd))
      let objectdata = [];
      for (let index = 0; index < Object.keys(dd).length; index++) {
        const elementKey = Object.keys(dd)[index];
        const next = dd[elementKey];
        for (let j = next - 1; j >= 0; j--) {
          let { amount, start } = await financeAppcontractOf.methods
            .orderInfos(elementKey, j)
            .call();

          let address_here =
            elementKey?.substring(0, 6) +
            "..." +
            elementKey?.substring(elementKey?.length - 6);
          let reward = web3Supply.utils.fromWei(amount);
          reward = parseFloat(reward).toFixed(0);
          let newArr = {
            address: address_here,
            userinfos1: moment(start * 1 * 1000).format("D MMM YYYY hh:mm"),
            userinfos: start,
            amount: reward,
          };
          objectdata.push(newArr);
        }
      }

      let objectdata1 = objectdata.sort(function (left, right) {
        return Number(left?.userinfos) < Number(right?.userinfos) ? 1 : -1;
      });
      dispatch({
        type: ActionTypes.LATEST_DEPOSIT,
        payload: {
          isLatest: false,
          latestDeposit: objectdata1,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
};
