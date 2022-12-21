import React from "react";
import image1 from "../../../assets/images/icon/ftI04.png";
import image2 from "../../../assets/images/icon/wyscan.png";


function SeventhPage() {
  return (
    <>
      <footer className="foot">
      <div class="container">
        <div className="ftK Indwark fl-bet">
          {/* <div className="ftKn">
            <div className="ftKnL flexC"></div>
          </div> */}
          <div className="ftKI text-center">
            <a href="https://wyzthscan.org/" className="ftKIa">
              <img src={image1} />
            </a>
            <a href="https://wyzthscan.org/" className="ftKIa">
              <img src={image2} style={{width:"40px"}} />
            </a>
            {/* <a href="https://twitter.com/BSGSplitGame" className="ftKIa"><img src={image3} /></a> */}
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}

export default SeventhPage;
