import React from "react";
import en from "../../../assets/images/pic/en.png";
import cn from "../../../assets/images/pic/cn.png";
import logo from "../../../assets/images/icon/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {connectionAction} from "../../../Redux/connection/actions"

export default function Header() {
  const dispatch = useDispatch();
	let acc = useSelector((state) => state.connect?.connection);

	const connectWallet = () =>{
		dispatch(connectionAction())
	}
  return (
    // className="container"
    <div >
      {/* <div className="row">
        <div className="col-12">

        </div>

      </div> */}
     
      <header className="header Huans flexC">
     
        <a href="#" className="hdlogo flexC">
          <img src={logo} />
        </a>
        <div className="hdR flexC">
          <div className="hdREn">
            <a href="#" className="hdREna flexC">
              <p className="langAbbr">EN</p>
              <img className="flagImg" src={en} />
              <i></i>
            </a>
            <div className="hdREnK Huans">
              <a href="#" className="hdREnA flexC en">
                <p>EN</p>
                <img src={en} />
              </a>
              <a href="#" className="hdREnA flexC cn">
                <p>CN</p>
                <img src={cn} />
              </a>
            </div>
          </div>
          <button className="hdLik linkWallet" onClick={connectWallet}>
			{acc === "No Wallet"
                ? "Connect"
                : acc === "Connect Wallet"
                ? "Connect"
                : acc === "Wrong Network"
                ? acc
                : acc.substring(0, 3) + "..." + acc.substring(acc.length - 3)}
			</button>
       
        </div>
        
      </header>
   
    </div>
   
  );
}
