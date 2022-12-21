import React, { useState, useEffect } from "react";
import pic1 from "../../../assets/images/pic/dasNu01.png";
import pic2 from "../../../assets/images/pic/dasNu02.png";
import pic3 from "../../../assets/images/pic/dasNu03.png";
import pic4 from "../../../assets/images/pic/dasNu04.png";
import deposite from "../../../assets/images/pic/dasTcI01.png";
import register from "../../../assets/images/icon/register.png";
import withdraw from "../../../assets/images/pic/dasTcI02.png";
import splite from "../../../assets/images/pic/dasTcI03.png";
import energy from "../../../assets/images/pic/dasTcI04.png";
import star from "../../../assets/images/icon/star01.png";
import helpcircle from "../../../assets/images/icon/help-circle.png";
import dasJia1 from "../../../assets/images/pic/dasJia1.png";
import dasJia2 from "../../../assets/images/pic/dasJia2.png";
import dasJia3 from "../../../assets/images/pic/dasJia3.png";
import group from "../../../assets/images/icon/Group.png";
import north from "../../../assets/images/pic/north_east.png";
import south from "../../../assets/images/pic/south_east.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WithdrawModal from "./WithdrawModal";
import DepositeModal from "./DepositeModal";
import SplitModal from "./SplitModal";
import RegisterModal from "./RegisterModal";
import ReactLoading from "react-loading";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import { CopyToClipboard, onCopy } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
import {
  financeAppContractAddress,
  financeAppContract_Abi,
  uleTokenAddress,
  uleTokenAbi,
} from "../../../utils/contracts";

import { useDispatch, useSelector } from "react-redux";
import { getpoolDetail } from "../../../Redux/poolInfo/action";
import { getLatestDepositors } from "../../../Redux/latestDepositors/actions";

import Web3 from "web3";
const web3Supply = new Web3("https://rpcapi.fantom.network/");
function Main() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  let acc = useSelector((state) => state.connect?.connection);
  let { Platinum, Silver, Gold, topPool } = useSelector(
    (state) => state.poolInfo
  );
  let { latestDeposit, isLatest } = useSelector(
    (state) => state.latestDepositors
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpoolDetail());
    dispatch(getLatestDepositors());
  }, []);

  const [refrealAdress, setrefrealAdress] = useState(
    "0x0000000000000000000000000000000000000000"
  );
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [myLevel, setMyLevel] = useState("");
  const [userIncome, setUserIncome] = useState("");
  const [userAccountbalance, setUserAccountBalance] = useState("0");
  const [copyTest, setcopyTest] = useState(false);

  const getDetail = async () => {
    try {
      if (acc == "No Wallet") {
        console.log("No Wallet");
      } else if (acc == "Wrong Network") {
        console.log("Wrong Wallet");
      } else if (acc == "Connect Wallet") {
        console.log("Connect Wallet");
      } else {
        const web3 = window.web3;
        let financeAppcontractOf = new web3.eth.Contract(
          financeAppContract_Abi,
          financeAppContractAddress
        );
        let financeAppTokenOf = new web3.eth.Contract(
          uleTokenAbi,
          uleTokenAddress
        );

        let balanceOf = await financeAppTokenOf.methods.balanceOf(acc).call();
        let usdtamount = Number(web3.utils.fromWei(balanceOf)).toFixed(2);

        setUsdtBalance(usdtamount);

        let userinfo = await financeAppcontractOf.methods.userInfo(acc).call();
        console.log("userinfo",userinfo)

        setMyLevel(userinfo.level);
        // let { totalWithdrawls } = await financeAppcontractOf.methods
        //   .rewardInfo(acc)
        //   .call();
        // let userincome = web3.utils.fromWei(totalWithdrawls);
        // userincome = parseFloat(userincome).toFixed(2);

        // setUserIncome(userincome);
        new web3.eth.getBalance(acc).then((response) => {
          console.log("response", response);
          let userBalance = web3.utils.fromWei(response);
          userBalance = Number(userBalance).toFixed(2);
          setUserAccountBalance(userBalance);
        });
        setrefrealAdress(userinfo.referrer);
      }
    } catch (e) {
      console.log("error while get detail on main",e);
    }
  };
  const [dayTopUsers, setDayTopUsers] = useState([]);
  const getTopUser = async () => {
    try {
      let financeAppcontractOf = new web3Supply.eth.Contract(
        financeAppContract_Abi,
        financeAppContractAddress
      );
      let getCurDays = await financeAppcontractOf.methods.getCurDay().call();
      let arr = [];
      for (let index = 0; index < 3; index++) {
        let topUser = await financeAppcontractOf.methods
          .dayTopUsers(getCurDays, index)
          .call();
        arr.push(topUser);
      }
      setDayTopUsers(arr);
    } catch (error) {
      console.error("error while get top user", error);
    }
  };
  let [lastDistributeTime, setLastDistributeTime] = useState(Date.now());
  const Completionist = () => (
    <div className="dasJiaC flexC fl-cen">
      <div className="dasJiaCn hourStart">0</div>
      <div className="dasJiaCn hourEnd">0</div>
      <p>:</p>
      <div className="dasJiaCn minuteStart">0</div>
      <div className="dasJiaCn minuteEnd">0</div>
      <p>:</p>
      <div className="dasJiaCn secondStart">0</div>
      <div className="dasJiaCn secondEnd">0</div>
    </div>
  );
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="dasJiaC flexC fl-cen">
          <div className="dasJiaCn hourEnd">{hours}</div>
          <p>:</p>
          <div className="dasJiaCn minuteEnd">{minutes}</div>
          <p>:</p>
          <div className="dasJiaCn secondEnd">{seconds}</div>
        </div>
      );
    }
  };
  const getLastDistribute = async () => {
    try {
      let financeAppcontractOf = new web3Supply.eth.Contract(
        financeAppContract_Abi,
        financeAppContractAddress
      );
      let lastDistribute = await financeAppcontractOf.methods
        .lastDistribute()
        .call();
      console.log("lastDistribute", lastDistribute);
      if (lastDistribute > 0) {
        lastDistribute = Number(lastDistribute);
        setLastDistributeTime(lastDistribute + 86400);
      } else {
        setLastDistributeTime(0);
      }
    } catch (error) {
      console.error("error while get last distriute", error);
    }
  };
  useEffect(() => {
    getTopUser();
    getDetail();
    getLastDistribute();
  }, [acc]);

  useEffect(() => {
    copyTest ? toast.success("Copied") : <></>;
    setTimeout(() => {
      setcopyTest(false);
    }, 10);
  }, [copyTest]);
  return (
    <>
      <WithdrawModal show={show} onHide={handleClose} getDetails={getDetail}  />
      <DepositeModal show={show1} onHide={handleClose1} getDetails={getDetail} />
      <SplitModal show={show2} onHide={handleClose2} />
      <RegisterModal show={show3} onHide={handleClose3} />
      <div
        className="Huans madk flex fl-bet"
        style={{ backgroundColor: "black" }}
      >
        <div className="madW1">
          <div className="madbck dasNuz Huans flexC fl-bet">
            <a href="#" className="dasNuzA dasNuzA1 Huans flexC fl-bet">
              <div className="dasNuzI">
                <img src={pic1} />
              </div>
              <div className="dasNuzN">
                <h3>Silver</h3>
                <p>
                  <span className="totalUser">$ {Silver}</span>
                </p>
              </div>
            </a>
            <a href="#" className="dasNuzA dasNuzA2 Huans flexC fl-bet">
              <div className="dasNuzI">
                <img src={pic2} />
              </div>
              <div className="dasNuzN">
                <h3>Gold</h3>
                <p className="luckPool">$ {Gold}</p>
              </div>
            </a>
            <a href="#" className="dasNuzA dasNuzA3 Huans flexC fl-bet">
              <div className="dasNuzI">
                <img src={pic3} />
              </div>
              <div className="dasNuzN">
                <h3>Platinum</h3>
                <p className="starPool">$ {Platinum}</p>
              </div>
            </a>
            <a href="#" className="dasNuzA dasNuzA4 Huans flexC fl-bets">
              <div className="dasNuzI">
                <img src={pic4} />
              </div>
              <div className="dasNuzN">
                <h3>Top Pool</h3>
                <p className="topPool">${topPool}</p>
              </div>
            </a>
          </div>

          <div className="madbck dasTck Huans flexC fl-bet">
            <div className="dasTckN Huans flexC fl-bet">
              <div className="dasTckI">
                <img src={register} />
              </div>
              <a onClick={handleShow3} className="dasTckNA dasTckA1">
                Register
              </a>
            </div>
            <div className="dasTckN Huans flexC fl-bet">
              <div className="dasTckI">
                <img src={deposite} />
              </div>
              <a onClick={handleShow1} className="dasTckNA dasTckA1">
                Deposit
              </a>
            </div>
            <div className="dasTckN Huans flexC fl-bet">
              <div className="dasTckI">
                <img src={withdraw} />
              </div>
              <a className="dasTckNA dasTckA2" onClick={handleShow}>
                Withdraw
              </a>
            </div>
            <div className="dasTckN Huans flexC fl-bet">
              <div className="dasTckI">
                <img src={splite} />
              </div>
              <a onClick={handleShow2} className="dasTckNA dasTckA3">
                Split account
              </a>
            </div>
          </div>

          {/* user info */}
          <div className="madbck dasDen Huans flexC fl-bet">
            <div className="dasDenL Huans flexC fl-bet">
              <div className="dasDenLP flexC">
                <h3>My level</h3>
                <div className="dasDenLs flexC">
                  <Rating
                    style={{ color: "#ffbf00" }}
                    initialRating={myLevel}
                    emptySymbol={<AiOutlineStar />}
                    fullSymbol={<AiFillStar className="level" />}
                    start={0}
                    stop={5}
                    readonly
                  />
                </div>
                <a href="#" className="dasDenLhp levelCircle">
                  <img src={helpcircle} />
                </a>
                <p className="levelHint">
                  one-star player, two-star player, three-star player, four-star
                  player, five-star player
                </p>
              </div>
              {/* <div className="dasDenLP flexC">
                <h3>Income</h3>
                <div className="dasDenLPn">
                  $
                  <span className="withdrawn">
                    {Number(userIncome).toFixed(2)}
                  </span>
                </div>
              </div> */}
              <div className="dasDenLP flexC">
                <h3>Referral</h3>
                <div className="dasDenLPn referAddr">{refrealAdress}</div>
              </div>
            </div>
            <div className="dasDenL Huans flexC fl-bet">
              <div className="dasDenLP flexC">
                <h3>FTM Balance</h3>
                <div className="dasDenLPn trxBal">{userAccountbalance}</div>
              </div>
              <div className="dasDenLP flexC">
                <h3>ULE Balance:</h3>
                <div className="dasDenLPn usdtBal">{usdtBalance}</div>
              </div>

              <div className="dasDenLP flexC">
                <h3>My Referral</h3>
                <div className="dasDenLPn myAddr">{window.location.href}</div>
                <span>
                  <CopyToClipboard
                    onCopy={() => setcopyTest(true)}
                    text={
                      refrealAdress ==
                      "0x0000000000000000000000000000000000000000"
                        ? `${window.location.href}`
                        : `${window.location.href}?referrallink=${acc}`
                    }
                  >
                    <AiOutlineCopy className="text-white  " />
                  </CopyToClipboard>
                </span>
              </div>
            </div>
          </div>
          <div className="dasJia dasJia1 Huans flexC fl-cen">
            <div className="dasJiaL flexC">
              <div className="dasJiaLI">
                <img src={dasJia1} />
              </div>
              <div className="dasJiaLN">
                <h3>Silver Reward</h3>
                <p>Time Remaning</p>
              </div>
            </div>
            <Countdown
              date={
                Date.now() + (parseInt(lastDistributeTime) * 1000 - Date.now())
              }
              renderer={renderer}
            />
            <div className="dasJiaR flexC fl-end">
              <p>Info</p>
              <a href="#" className="dasDenLhp luckCircle">
                <img src={helpcircle} />
              </a>
              <div className="luckHint">
                Daily last 10 depositor shall be rewarded
              </div>
            </div>
          </div>
          <div className="dasJia dasJia2 Huans flexC fl-cen">
            <div className="dasJiaL flexC">
              <div className="dasJiaLI">
                <img src={dasJia2} />
              </div>
              <div className="dasJiaLN">
                <h3>Gold reward</h3>
                <p>Time Remaning</p>
              </div>
            </div>
            <Countdown
              date={
                Date.now() + (parseInt(lastDistributeTime) * 1000 - Date.now())
              }
              renderer={renderer}
            />
            <div className="dasJiaR flexC fl-end">
              <p>Info</p>
              <a href="#" className="dasDenLhp topCircle">
                <img src={helpcircle} />
              </a>
              <div className="topHint">
                Top 3 inviter daily shall split the pool daily.
              </div>
            </div>
          </div>
          <div className="dasJia dasJia3 Huans flexC fl-cen">
            <div className="dasJiaL flexC">
              <div className="dasJiaLI">
                <img src={dasJia3} />
              </div>
              <div className="dasJiaLN">
                <h3>Platinum Reward</h3>
                <p>Time Remaning</p>
              </div>
            </div>
            <Countdown
              date={
                Date.now() + (parseInt(lastDistributeTime) * 1000 - Date.now())
              }
              renderer={renderer}
            />
            <div className="dasJiaR flexC fl-end">
              <p>Info</p>
              <a href="#" className="dasDenLhp starCircle">
                <img src={helpcircle} />
              </a>
              <div className="starHint">
                4 star player shall split the daily pool daily.
              </div>
            </div>
          </div>
          <div className="dasJia dasJia4 Huans flexC fl-cen">
            <div className="dasJiaL flexC">
              <div className="dasJiaLI">
                <img src={dasJia3} />
              </div>
              <div className="dasJiaLN">
                <h3>CTO Reward</h3>
                <p>Time Remaning</p>
              </div>
            </div>
            <Countdown
              date={
                Date.now() + (parseInt(lastDistributeTime) * 1000 - Date.now())
              }
              renderer={renderer}
            />
            <div className="dasJiaR flexC fl-end">
              <p>Info</p>
              <a href="#" className="dasDenLhp starCircle">
                <img src={helpcircle} />
              </a>
              <div className="starHint">
                4 star player shall split the daily pool daily.
              </div>
            </div>
          </div>
        </div>
        <div className="madW2">
          <div className="madbck daRiz Huans">
            <div className="daRizT">Latest Depositors</div>
            <div className="daRizN flexC fl-bet">
              {!isLatest ? (
                latestDeposit?.map((item) => {
                  return (
                    <a href="#" className="daRiza flexC fl-bet">
                      <div className="daRizaP latestDeposit">
                        {item.address}
                      </div>

                      <span className="daRizaW">{item.userinfos1}</span>
                      <div className="daRizaS flexC">
                        <img src={group} />
                        <p className="latestAmount">${item.amount}</p>
                      </div>
                    </a>
                  );
                })
              ) : (
                <ReactLoading
                  type="spin"
                  color="#ffffff"
                  className="mb-2 mx-auto"
                  height={30}
                  width={30}
                />
              )}
            </div>
          </div>
          {/* <div className="madbck daRiz Huans">
            <div className="daRizT">Lucky Player</div>
            <div className="daRizN flexC fl-bet">
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">1</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">2</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">3</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">4</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">5</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>

              <a href="#" className="daRiza flexC">
                <div className="daRizaU">6</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">7</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">8</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">9</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
              <a href="#" className="daRiza flexC">
                <div className="daRizaU">10</div>
                <div className="daRizaM luckUser">Nill</div>
                <div className="daRizaS flexC">
                  <img src={group} />
                  <p className="luckDeposit">0.00</p>
                </div>
              </a>
            </div>
          </div> */}
          <div className="madbck daRiz Huans">
            <div className="daRizT">Top 3 Player</div>
            <div className="daRizNN flexC fl-bet">
              {dayTopUsers.length
                ? dayTopUsers.map((item, index) => {
                    return (
                      <a href="#" className="daRiza flexC">
                        <div className="daRizaU">{index + 1}</div>
                        <div className="daRizaM dayTopUser">{item}</div>
                        <div className="daRizNz">
                          <img src={north} />
                        </div>
                      </a>
                    );
                  })
                : [1, 2, 3].map((item, index) => {
                    return (
                      <a href="#" className="daRiza flexC">
                        <div className="daRizaU">{index + 1}</div>
                        <div className="daRizaM dayTopUser">Nill</div>
                        <div className="daRizNz">
                          <img src={north} />
                        </div>
                      </a>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
