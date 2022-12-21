import React,{useState, useEffect} from 'react'
import ReactLoading from 'react-loading';
import { financeAppContractAddress, financeAppContract_Abi } from '../../../utils/contracts';
import {withdrawInfo} from '../../../Redux/withdrawDetail/action'
import { toast } from 'react-toastify';
import {useSelector,useDispatch}  from "react-redux"
function WithdrawModal({show,onHide,getDetails}) {
    const dispatch = useDispatch()
    let acc = useSelector((state) => state.connect?.connection);
    let {withdrawDetail,all_val} = useSelector((state)=>state.withDrawInfo);
      const [loader, setLoader] = useState(false);
      const [toatlWithdraw, settotalWithdraw] = useState(0);
      const getDetail = async () => {
        try {
         if (acc == "No Wallet") {
            console.log("No Wallet");
          } else if (acc == "Wrong Network") {
            console.log("Wrong Wallet");
          } else if (acc == "Connect Wallet") {
            console.log("Connect Wallet");
          }else{
            dispatch(withdrawInfo(acc));
            }
            } catch (e) {
                console.log("error while get detiail",e);
            }

    }
    const withdrawAmount = async () => {
        try {
            if (acc == "No Wallet") {
                toast.info("No Wallet");
              } else if (acc == "Wrong Network") {
                toast.info("Wrong Wallet");
              } else if (acc == "Connect Wallet") {
                toast.info("Connect Wallet");
              }else{
                setLoader(true)
                console.log("available_withdraw",typeof toatlWithdraw);
                if(all_val> 0 ){

                    const web3 = window.web3;
                    let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                    await financeAppcontractOf.methods.withdraw().send({
                        from: acc 
                    });
                    getDetail()
                    onHide()
					getDetails();
                    setLoader(false)
                    dispatch(withdrawInfo(acc));
                    toast.success("successfully withdraw");
                }else{
                    setLoader(false);
                    toast.info("You don't have any reward yet!")
                }
            }
        }
        catch (e) {
            setLoader(false)
            console.log(e);
    }
}
    
    useEffect(() => {
        getDetail()
    }, [acc]);
  return (
    <>
   
   {show && <div className='container mt-2 p-3' style={{minHeight:"50vh", width:"100vw", backgroundColor:"#0C102A",  position:"absolute", zIndex:1000}}>
   <div className="TcNr flexC fl-cen">
		<div className="Tc-qkN  flexC fl-cen">
			<div className="Tc-qkDK">
				<div className="Tc-qkNz flexC fl-bet">
					<h4 style={{color:"#fff",fontSize:"20px",paddingLeft:"30%"}}>WITHDRAW</h4>
				</div>
				
				
				<div className="Tc-qkNz flexC fl-bet">
				
					<div className="Tc-qkNH">
						
						Unlock principal
					</div>
					<div className="Tc-qkNS"><span className="unfreezed">{withdrawDetail.unlock}</span> ULE</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Cycle reward
					</div>
					<div className="Tc-qkNS"><span className="staticReward">{withdrawDetail.statics}</span> ULE</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Directs
					</div>
					<div className="Tc-qkNS"><span className="directReward">{withdrawDetail.directs}</span> ULE</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						CTO
					</div>
					<div className="Tc-qkNS"><span className="directReward">{withdrawDetail.CTO}</span> ULE</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Team ROI reward
					</div>
					<div className="Tc-qkNS"><span className="level4Reward">{withdrawDetail.ROIReleased}</span> ULE</div>
				</div>
				
				
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Silver reward
					</div>
					<div className="Tc-qkNS"><span className="level4Reward">{withdrawDetail.Silver}</span> ULE</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Gold reward
					</div>
					<div className="Tc-qkNS"><span className="luckReward">{withdrawDetail.Gold}</span> ULE</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Platinum reward
					</div>
					<div className="Tc-qkNS"><span className="starReward">{withdrawDetail.Platinum}</span> ULE</div>
				</div>
				<div className="Tc-qkNz flexC fl-bet">
					<div className="Tc-qkNH">
						Top player reward
					</div>
					<div className="Tc-qkNS"><span className="topReward">{withdrawDetail.top}</span> ULE</div>
				</div>			
			</div>
			<div className="Tc-qkNF flexC fl-bet">
				<div className="Tc-qkNH">
					Available withdrawal
				</div>
				<div className="Tc-qkNS"><span className="totalReward">{all_val}</span> ULE</div>
			</div>
			
			<div className="Tc-qkb fl-end flexC">
				<button  className="Tc-qkBut withdrawBut" onClick={withdrawAmount}>
				{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Withdraw"} 
				</button>
                <a onClick={onHide}className="Tc-cfBa Tc-cfBel flexC fl-cen close btn-danger">
						Cancel
					</a>
			</div>
		
		</div>
	</div>
</div>}
</>
   
  )
}

export default WithdrawModal