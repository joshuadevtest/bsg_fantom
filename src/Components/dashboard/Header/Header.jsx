import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import logo from "../../../assets/images/icon/logo.png";
import contract from "../../../assets/images/icon/hdMI01.png";
import platform from "../../../assets/images/icon/hdMI02.png";
import income from "../../../assets/images/icon/hdMI03.png";
import deposite from "../../../assets/images/icon/hdMI04.png";
import en from "../../../assets/images/pic/en.png";
import cn from "../../../assets/images/pic/cn.png";
import { useDispatch, useSelector } from "react-redux";
import { connectionAction } from "../../../Redux/connection/actions";
import {
  financeAppContractAddress,
  financeAppContract_Abi,
} from "../../../utils/contracts";
import { getRemaintime } from "../../../Redux/remaintime/action";
import Countdown from "react-countdown";
import Web3 from "web3";
const web3Supply = new Web3("https://rpcapi.fantom.network/");
function Header() {
  const [depositTime, setdepositTime] = useState("...");
  const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);
  let { remaintime } = useSelector((state) => state.remaintime);
  console.log("remaintime",remaintime)
  const Completionist = () => (
    <div className="hdFSNp depositCountDown text-primary">...</div>
  );
  const connectWallet = () => {
    dispatch(connectionAction());
  };
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="hdFSNp depositCountDown text-primary">
          {days}:D {hours}:H {minutes}:M {seconds}:S
        </div>
      );
    }
  };
  const getDeposit_time = async () => {
    try {
      if (acc == "No Wallet") {
        console.log(acc);
        dispatch(getRemaintime(acc));
      } else if (acc == "Wrong Network") {
        console.log(acc);
        dispatch(getRemaintime(acc));
      } else if (acc == "Connect Wallet") {
        console.log(acc);
        dispatch(getRemaintime(acc));
      } else {
        dispatch(getRemaintime(acc));
      }
    } catch (e) {
      console.log("Error While Get Time", e.message);
    }
  };
  const getDetail = async () => {
    try {
      let financeAppcontractOf = new web3Supply.eth.Contract(
        financeAppContract_Abi,
        financeAppContractAddress
      );
      let depostTime = await financeAppcontractOf.methods.getCurDay().call();
      setdepositTime(depostTime);
      // let day = await financeAppcontractOf.methods.dayPerCycle().call();
      // setDays(day);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getDeposit_time();
    getDetail();
  }, [acc]);
  return (
    <header className="header Huans flexC">
      <Link to="/" className="hdlogo flexC">
        <img src={logo} />
      </Link>
      <div className="hdFS flexC fl-bet">
        <div className="hdFSN flexC">
          <img src={contract} />
          <p>Contract address:</p>
          &nbsp;
          <div className="hdFSNp contractAddress">
            <a
              href={`https://ftmscan.com/address/${financeAppContractAddress}`}
              className="stack_p"
              target="_blank"
            >
              {financeAppContractAddress?.substring(0, 8) +
                "..." +
                financeAppContractAddress?.substring(
                  financeAppContractAddress?.length - 8
                )}
            </a>
          </div>
        </div>
        <div className="hdFSN flexC">
          <img src={platform} />

          <div className="hdFSNp runTime text-light">
            Platform Running time:{" "}
            <span className="text-primary">{depositTime}</span>{" "}
          </div>
        </div>
        <div className="hdFSN flexC">
          <img src={income} />
          <p>Income:</p>
          &nbsp;
          <div className="hdFSNp">10 days per cycle. Monthly 25%</div>
        </div>
        <div className="hdFSN flexC">
          <img src={deposite} />
          <p>Deposit time:</p>

          <Countdown
            date={Date.now() + (parseInt(remaintime) * 1000 - Date.now())}
            renderer={renderer}
          />
        </div>
      </div>
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
  );
}

export default Header;
