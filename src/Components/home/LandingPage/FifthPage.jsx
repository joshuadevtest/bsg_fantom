import React from "react";
import account from "../../../assets/images/pic/Indjfz01.png"
import wallet from "../../../assets/images/pic/Indjfz02.png"
import contribute from "../../../assets/images/pic/Indjfz03.png"

function FifthPage() {
  return (
    <div className="Indjfz">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="IndjfzT">
              Start within a few minutes
            </div>
          </div>
        </div>
        
          <div className="IndjfzN Indwark Huans">
          <div className="row">
            <div className="col-md-4">
            <div className="Indjfzs">
              <img src={account} />
              <p>Create account</p>
            </div>
            </div>
            <div className="col-md-4">
            <div className="Indjfzs">
              <img src={wallet}/>
              <p>Connect wallet</p>
            </div>
            </div>
            <div className="col-md-4">
            <div className="Indjfzs">
              <img src={contribute} />
              <p>CONTRIBUTE</p>
            </div>
            </div>
            <div className="Indjfzx Indjfzx1"></div>
            <div className="Indjfzx Indjfzx2"></div>
          </div>
          </div>
          </div>
    </div>
  );
}

export default FifthPage;
