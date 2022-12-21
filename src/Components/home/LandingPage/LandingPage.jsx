import React from 'react'
import {Link} from "react-router-dom";
import img from "../../../assets/images/back/crypto.png"

function LandingPage() {
  return (
    
    <div className="IndBan fl-bet">
		<div class="container">
		<div className='row'>
			<div  className='col-md-5'>
	     <div className="IndBanB Indwark Huans">
		<h3>
			Ule Fantom
		</h3>
		<p>
			Fantom Blockchain Split Game
		</p>
		<Link to="/dashboard"  className="IndZhua">
			CONTRIBUTE
		</Link>
	    </div>
		</div>
		<div className='col-md-6'>
	    <div className='indBanr'>
		<img className='landingPage' src={img} />
		</div>
		</div>
		</div>
		</div>
    </div>
    
  )
}

export default LandingPage