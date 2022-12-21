import { ActionTypes } from "../types";
import { financeAppContractAddress, financeAppContract_Abi } from "../../utils/contracts";
export const withdrawInfo = (acc) => {
    return async (dispatch) => {
        try {
           
            let obj = {}
            let split="";
            const web3 = window.web3;
            let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress)
            let reward_info = await financeAppcontractOf.methods.rewardInfo(acc).call();
            let value= await financeAppcontractOf.methods.getCurSplit(acc).call();
            console.log("reward_info", reward_info);
             split=Number(web3.utils.fromWei(value)).toFixed(2)
            
            console.log("reward_info.directs",reward_info.directs)
            console.log("reward_info.capitals",reward_info.capitals)
            let capitals = web3.utils.fromWei(reward_info.capitals)
            let all_val =  parseFloat((parseFloat(web3.utils.fromWei(reward_info.capitals)) + parseFloat(web3.utils.fromWei(reward_info.statics)) + parseFloat(web3.utils.fromWei(reward_info.directs)) + parseFloat(web3.utils.fromWei(reward_info.Silver)) + parseFloat(web3.utils.fromWei(reward_info.Platinum)) + parseFloat(web3.utils.fromWei(reward_info.Gold)) + parseFloat(web3.utils.fromWei(reward_info.top)) + parseFloat(web3.utils.fromWei(reward_info.CTO)) + parseFloat(web3.utils.fromWei(reward_info.ROIReleased)))).toFixed(3)

            obj['directs'] = Number(web3.utils.fromWei(reward_info.directs)).toFixed(2)
            obj['statics'] = Number(web3.utils.fromWei(reward_info.statics)).toFixed(2)
            obj['capitals'] = Number(web3.utils.fromWei(reward_info.capitals)).toFixed(2)
            obj['CTO'] = Number(web3.utils.fromWei(reward_info.CTO)).toFixed(2)
            obj['ROIReleased'] = Number(web3.utils.fromWei(reward_info.ROIReleased)).toFixed(2)
            obj['Platinum'] = Number(web3.utils.fromWei(reward_info.Platinum));
            obj['Silver'] = Number(web3.utils.fromWei(reward_info.Silver)).toFixed(2)
            obj['Gold'] = Number(web3.utils.fromWei(reward_info.Gold)).toFixed(2)
            obj['top'] = Number(web3.utils.fromWei(reward_info.top)).toFixed(2)
            obj['unlock'] = Number(capitals).toFixed(2)
            obj['totalWithdrawlsFTM'] = Number(web3.utils.fromWei(reward_info.totalWithdrawlsFTM)).toFixed(2);
            obj['totalWithdrawlsULE'] = Number(web3.utils.fromWei(reward_info.totalWithdrawlsULE)).toFixed(2)
            

            dispatch({ type: ActionTypes.WITHDRAW_INFO, payload: obj, payload1:all_val,payload2:split});
            
            
        } catch (e) {
            console.log("error while get detiail",e);
        }
    }

}
