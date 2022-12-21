import React,{useState, useEffect} from 'react'
import {Modal, Button} from "react-bootstrap";
import group from "../../../assets/images/icon/Group.png";
import {RxCross1} from 'react-icons/rx';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { financeAppContractAddress, financeAppContract_Abi, uleTokenAbi, uleTokenAddress } from '../../../utils/contracts';
import {getRemaintime} from "../../../Redux/remaintime/action";
import {withdrawInfo} from "../../../Redux/withdrawDetail/action"
import {useSelector, useDispatch}  from "react-redux"
function SplitModal({onHide, show}) {
	let acc = useSelector((state) => state.connect?.connection);
	let {split} = useSelector((state)=>state.withDrawInfo);
	let [amount, setAmount] = useState('')
	let [stdAmount, setsdtAmount] = useState('50')
	let [recieverAdress, setRecieverAdress] = useState('')
	const [getsplit_Value, setgetsplit_Value] = useState("")
	const [depositcheck, setdepositcheck] = useState(1);
	const [loader, setloader] = useState(false)
	
	const dispatch = useDispatch()

	const splitbydeposit = async () => {
		try {
			if (acc == "No Wallet") {
				toast.info("No Wallet");
			  } else if (acc == "Wrong Network") {
				toast.info("Wrong Wallet");
			  } else if (acc == "Connect Wallet") {
				toast.info("Connect Wallet");
			  }else{
				
				const web3 = window.web3;
				const contract = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
				if (parseFloat(stdAmount) >= 50 && parseFloat(stdAmount) <= 5000) {
					const {totalDeposit, referrer} = await contract.methods.userInfo(acc).call();
					const {split} = await contract.methods.rewardInfo(acc).call();
					if(parseFloat(split) >= parseInt(stdAmount)){
					  if(parseFloat(totalDeposit) ==0){
					  if (parseInt(stdAmount) % 50 === 0) {
						  if (referrer == '0x0000000000000000000000000000000000000000') {
							  toast.error('please Register Account 1st ')
						  }else {
							  setloader(true)
							  let value = web3.utils.toWei(stdAmount);
							  await contract.methods.depositBySplit(value).send({
								  from:acc
						   })
						   dispatch(getRemaintime());
						   setdepositcheck(1);
						   toast.success("Amount Deposited successfully")
						   setloader(false)
						  }
					  }
					  else {
						  toast.error('please enter value in ratio 50 ')
					  }
				}else{
				  setdepositcheck(1);
				  toast.info("you have already deposited")
				}
					}else{
					  toast.info("You don't have any split amount")
					}
				}else{
					toast.info('value must be greater then 50 and less then 5000 ')
				}
			  }
		} catch (error) {
			setloader(false)
			setdepositcheck(1)
			console.error("error while deposit amount", error.message);
		}
	};

	const splitbytransfer = async () => {
		try {
			if (acc == "No Wallet") {
				toast.info("No Wallet");
			  } else if (acc == "Wrong Network") {
				toast.info("Wrong Wallet");
			  } else if (acc == "Connect Wallet") {
				toast.info("Connect Wallet");
			  }else{
				
				const web3 = window.web3;
				console.log("recieverAdress",recieverAdress,"amount",amount)
				const contract = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
				if (parseFloat(amount) >= 50 && parseFloat(amount) <= 50000) {
					const {totalDeposit, referrer} = await contract.methods.userInfo(recieverAdress).call();
				  const {split} = await contract.methods.rewardInfo(acc).call();
					  if(parseFloat(split) >= parseInt(amount)){
					if(parseFloat(totalDeposit) ==0){
	  
					if (parseInt(amount) % 50 === 0) {
					   
							setloader(true)
							let value = web3.utils.toWei(amount);
							console.log("value",value)
							await contract.methods.transferBySplit(recieverAdress,value).send({
								from:acc
						 })
						 setdepositcheck(1);
						 toast.success("Amount Deposited successfully")
						 setloader(false)
				  
					}
					else {
						toast.error('please enter value in ratio 50 ')
					}
			  }else{
				setdepositcheck(1);
				toast.info("Receiver has already deposited")
			  }
			}else{
			  toast.info("You don't have any split amount")
			}
				}else{
					toast.info('value must be greater then 50 and less then 50000 ')
				}
			  }
		} catch (error) {
			setloader(false)
			setdepositcheck(1)
			console.error("error while deposit amount", error.message);
		}
	  }
		const changeValue = async (e) => {
		  setsdtAmount(e.target.value);
		}
		const changeValueAmount = async (e) => {
		  setAmount(e.target.value)
		}
		const changeRecieverAdress = async (e) => {
		  setRecieverAdress(e.target.value)
		}
		const getsplit = async () => {
			try {
			  if (acc == "No Wallet") {
				console.log("No Wallet");
			  } else if (acc == "Wrong Network") {
				console.log("Wrong Wallet");
			  } else if (acc == "Connect Wallet") {
				console.log("Connect Wallet");
			  }else{
			  const web3 = window.web3;
			  dispatch(withdrawInfo(acc))
			  let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
			  let getCurSplit = await financeAppcontractOf.methods.getCurSplit(acc).call();
			  getCurSplit = web3.utils.fromWei(getCurSplit)
			  getCurSplit = parseFloat(getCurSplit).toFixed(2)
			  setgetsplit_Value(getCurSplit)
			}
			}
			catch (e) {
			  toast.error(e.message);
			}
		}
	  
		useEffect(() => {
		  getsplit()
		}, [])

  return (
    <>

   {/* <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body >
		<div className=' ' >
		<div className='text-light float-end' onClick={props.onHide}><RxCross1/></div>
    <div className="TcNr  fl-cen">
		<div className="Tc-cfN   fl-cen">
			<div className="Tc-cfBK">
				<div className="Tc-cfBD flex mb-1">
					<div className="Tc-cfBDH">USDT</div>
					<div className="Tc-cfBDS flex">
						<input type="text" 
                        value={stdAmount}
                        onChange={changeValue} 
						 className="Tc-cfBDSI Huans receiver " />
					</div>
					<div className="Tc-cfBmz  fl-end ">
					<button className="Tc-cfBza Tc-cfBza2 transferFreezing float-end"
					onClick={() => { splitbydeposit() }}
					>
					{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Deposit"}
					</button>
				</div>
				</div>
				<div className="Tc-cfBD flex">
					<div className="Tc-cfBDH">
						Amount
					</div>					
					<div className="Tc-cfBDS flex">
						<input type="text" placeholder="" 
						  disabled={stdAmount.toString().length > 0}
                        value={amount}
                        onChange={changeValueAmount} 
						className="Tc-cfBDSI Huans tAmount" />
						<div className="Tc-cfBDSz  fl-cen"><img src={group} /><p>USDT {split}</p></div>
						<div className="Tc-Word">
							The ratio of 50
						</div>
					</div>
				</div>
				<div className="Tc-cfBD flex">
					<div className="Tc-cfBDH">
						Receiver address
					</div>
					<div className="Tc-cfBDS flex">
						<input type="text" placeholder="Receiver address" value={recieverAdress} onChange={changeRecieverAdress} className="Tc-cfBDSI Huans receiver" />
					</div>
				</div>	
				<div className="Tc-cfBmz  fl-end">
					<button className="Tc-cfBza Tc-cfBza2 transferFreezing float-end"onClick={splitbytransfer}>{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Transfer"}
					</button>
				</div>
			</div>
			
		
		</div>
	</div>
 </div>
      </Modal.Body>
    </Modal> */}
    {show && <div className='container mt-2 p-3' style={{minHeight:"50vh", width:"100vw", backgroundColor:"#0C102A",  position:"absolute", zIndex:1000}}>
		<div className='text-light float-end' onClick={onHide}><RxCross1/></div>
    <div className="TcNr flexC fl-cen">
		<div className="Tc-cfN  flexC fl-cen">
			<div className="Tc-cfBK">
				<div className="Tc-cfBD flex mb-2">
					<div className="Tc-cfBDH">USD</div>
					<div className="Tc-cfBDS flex">
						<input type="text" 
                        value={stdAmount}
                        onChange={changeValue} 
						 className="Tc-cfBDSI Huans receiver " />
					</div>
					<div className="Tc-cfBmz flexC fl-end">
					<button className="Tc-cfBza Tc-cfBza2 transferFreezing"
					onClick={() => { splitbydeposit() }}
					>
					{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Deposit"}
					</button>
				</div>
				</div>
				<div className="Tc-cfBD flex">
					<div className="Tc-cfBDH">
						Amount
					</div>					
					<div className="Tc-cfBDS flex">
						<input type="text" placeholder="" 
						  disabled={stdAmount.toString().length > 0}
                        value={amount}
                        onChange={changeValueAmount} 
						className="Tc-cfBDSI Huans tAmount" />
						<div className="Tc-cfBDSz flexC fl-cen"><img src={group} /><p>USD {split}</p></div>
						<div className="Tc-Word">
							The ratio of 50
						</div>
					</div>
				</div>
				<div className="Tc-cfBD flex">
					<div className="Tc-cfBDH">
						Receiver address
					</div>
					<div className="Tc-cfBDS flex">
						<input type="text" placeholder="Receiver address" value={recieverAdress} onChange={changeRecieverAdress} className="Tc-cfBDSI Huans receiver" />
					</div>
				</div>	
				<div className="Tc-cfBmz flexC fl-end">
					<button className="Tc-cfBza Tc-cfBza2 transferFreezing"onClick={splitbytransfer}>{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Transfer"}
					</button>
				</div>
			</div>
			
		
		</div>
	</div>
 </div>}
 </>
  )
}

export default SplitModal