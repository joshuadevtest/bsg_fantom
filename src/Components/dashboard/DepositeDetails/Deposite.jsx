import React,{useState, useEffect} from 'react'
import helpcircle from "../../../assets/images/icon/help-circle.png"
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import {useSelector} from 'react-redux'
import {financeAppContractAddress, financeAppContract_Abi} from '../../../utils/contracts'
function Deposite() {
	const [depositDetail, setDepositDetail] = useState([])
	const [flag, setFlag] = useState(false)
	let acc = useSelector((state) => state.connect?.connection);
	const getDetail = async () => {
		try {
		  if (acc == "No Wallet") {
					  console.log("No Wallet");
					} else if (acc == "Wrong Network") {
					  console.log("Wrong Wallet");
					} else if (acc == "Connect Wallet") {
					  console.log("Connect Wallet");
					}else{
		  const web3 = window.web3;
		  let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
		  let getOrderLength = await financeAppcontractOf.methods.getOrderLength(acc).call();
		  if (getOrderLength > 0) {
			let dummyArray=[];
			let getOrderLengths = getOrderLength - 1
			console.log("getOrderLength", getOrderLength);
			for (let index = 0; index < getOrderLength; index++) {

				let orderInfo = await financeAppcontractOf.methods.orderInfos(acc, index).call();
				let amount = web3.utils.fromWei(orderInfo.amount)
				let getBoosterIncomeIsReady = await financeAppcontractOf.methods.boosterIncomeIsReady(acc).call()
				dummyArray.push({
					time:orderInfo.start,
					unixFreezTime:orderInfo.unfreeze,
					orderAmount:amount = web3.utils.fromWei(orderInfo.amount),
					reward:getBoosterIncomeIsReady[0] ? parseInt(amount) / 100 * 30 : parseInt(amount) / 100 * 20,
					status:orderInfo.isUnfreezed
				})
			}
			setDepositDetail(dummyArray)
			setFlag(true)
		  }
		  else {
			toast.info('please deposit 1st')
  
		  }
		}
		} catch (e) {
		  console.log('what is response', e)
		//   toast.error(e.message);
		}
	}
	useEffect(() => {
	  getDetail()
	},[acc]);
  return (
    <div className="Huans madk flex fl-bet" style={{height:"100vh",backgroundColor:"black"}}>
		<div className="depDK">
			<div className="depTit Huans flexC fl-bet">
				<div className="depTitH">
					Deposit details 
				</div>
			</div>
			<table width="100%" border="0" cellspacing="0" cellpadding="0" className="DepTab">
				<tr>
					<th scope="col">
						Amount 
					</th>
					<th scope="col">
						Deposit Date 
					</th>
					<th scope="col">
						Unfreeze Time 
					</th>
					<th scope="col">
						Monthly 
					</th>
					<th scope="col" className="DepTabB fl-cen flexC">
						Order Status 
						&ensp;<a href="#" className="dasDenLhp"><img src={helpcircle} /></a>
						<div className="DepTabBN">
							<p className="DepC1">
								* Freezing: Unmaturity of deposit 
							</p>
							<p className="DepC3">
								* Completed: unfreeze and withdrawal completed 
							</p>
							<p className="DepC6">
								* Available withdraw: Withdrawable 
							</p>
						</div>
					</th>
				</tr>
				<tbody>
				{
					depositDetail?.map((data, index)=>{
						return(<tr key={index+1}>
					<td scope="col">
					{flag &&
                <p>{data.orderAmount}</p>
              }
					</td>
					<td scope="col">
					{flag &&
                <p><Moment format="DD/MM/YYYY hh:mm:ss" unix >{data.time}</Moment></p>
              }
					</td>
					<td scope="col">
					{flag &&
                <p><Moment format="DD/MM/YYYY hh:mm:ss" unix >{data.unixFreezTime}</Moment></p>
              }
					</td>
					<td scope="col">
					{flag &&
                <p>{data.reward}</p>
              }
					</td>
					<td scope="col" className="DepTabB fl-cen flexC">
					{flag &&
                <p>{data.status ? 'Unfreeze' : 'Freeze'}</p>
              }
					</td>
				</tr>
						)
					})
				}
				</tbody>
			</table>
		
		</div>
		
	</div>
  )
}

export default Deposite