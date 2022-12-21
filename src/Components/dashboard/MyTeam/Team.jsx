import React,{useState, useEffect} from 'react'
import team1 from "../../../assets/images/pic/team01.png" 
import team2 from "../../../assets/images/pic/team02.png" 
import team3 from "../../../assets/images/pic/team03.png" 
import team5 from "../../../assets/images/pic/team05.png" 
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify'
import {financeAppContractAddress, financeAppContract_Abi} from "../../../utils/contracts"
function Team() {
	let acc = useSelector((state) => state.connect?.connection);
	const [userinfos, setUserInfos] = useState("");
	const [downline, setDownline] = useState({});
	const [team, setTeamDeposite] = useState({});

	const getDetail = async () => {
		try {
		  if (acc == "No Wallet") {
					  console.log("No Wallet");
					} else if (acc == "Wrong Network") {
					  console.log("Wrong Wallet");
					} else if (acc == "Connect Wallet") {
					  console.log("Connect Wallet");
					}else{
		  let obj = {};
		  const web3 = window.web3;
		  let financeAppcontractOf = new web3.eth.Contract(
			financeAppContract_Abi,
			financeAppContractAddress
		  );
		  let userDetails = await financeAppcontractOf.methods
			.userInfo(acc)
			.call();
		  setDownline(userDetails);
		//   let teamDeposite = await financeAppcontractOf.methods
		// 	.getTeamDeposit(acc)
		// 	.call();
		//   setTeamDeposite(teamDeposite);
		  let getTeamDeposit = await financeAppcontractOf.methods
			.getTeamDeposit(acc)
			.call();
			console.log('getTeamDeposit', getTeamDeposit);
		  let sales = web3.utils.fromWei(getTeamDeposit[2]);
		  let PerformanceAarea = web3.utils.fromWei(getTeamDeposit[0]);
		  let PerformanceBarea = web3.utils.fromWei(getTeamDeposit[1]);
		  let getOrderLength = await financeAppcontractOf.methods
			.userInfo(acc)
			.call();
		  obj["sale"] = sales;
		  obj["PerformanceAarea"] = PerformanceAarea;
		  obj["PerformanceBarea"] = PerformanceBarea;
		  obj["orderLength"] = getOrderLength.teamNum;
		  // obj["checkMaxDeposit"] = checkMaxDeposit;
		  obj["Leval_Data"] = getOrderLength.teamNum;
		  // obj["check_Address"] = check_Address;
  
		  setUserInfos(obj);
		}
		} catch (e) {
		  toast.error(e.message);
		}
	};
	useEffect(() => {
	  getDetail();
	}, [acc]);
  return (
    <div className="Huans madk flex fl-bet" style={{height:"100vh",backgroundColor:"black"}}>
			<div className="teaBRF flex fl-bet">
				<a href="#" className="teaBRFa flexC">
					<img src={team1}/>
					<div className="teaBRFp">
						<p>
							Sales 
						</p>
						<h3 className="DepC4 totalTeamDeposit">{userinfos.sale}</h3>
					</div>
				</a>
				<a href="#" className="teaBRFa flexC">
					<img src={team2} />
					<div className="teaBRFp">
						<p>
							Downline 
						</p>
						<h3 className="DepC1 totalInvited">{downline.teamNum}</h3>
					</div>
				</a>
				<a href="#" className="teaBRFa flexC">
					<img src={team3} />
					<div className="teaBRFp">
						<p>
							Performance A area  
						</p>
						<h3 style={{color:"#FA2256"}} className="maxDirectDeposit">{userinfos.PerformanceAarea}</h3>
					</div>
				</a>
	
				<a href="#" className="teaBRFa flexC">
					<img src={team5} />
					<div className="teaBRFp">
						<p>
							Performance B area 
						</p>
						<h3 className="DepC2 otherDirectDeposit">{userinfos.PerformanceBarea}</h3>
					</div>
				</a>
				
			</div>
		</div>
  )
}

export default Team