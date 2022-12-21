import React from 'react'
import luckyPoolImg from '../../../assets/images/pic/Indchi01.png'
import diamondPoolImg from '../../../assets/images/pic/Indchi02.png'
import referralPoolImg from '../../../assets/images/pic/Indchi03.png'
function Pools() {
  return (
    <div className="Indchi">
	<div class="container">
	 <div class="row">
	  <div className="IndchiH Indwark Huans">
		<div className='col-md-4'>
		<a href="#" className="IndchiHa">
			<div className="IndchiHI"><img src={luckyPoolImg} /></div>
			<h3>
				Daily Lucky Pool
			</h3>
			<p className="luckPool">$0.00</p>
		</a>
		</div>
		<div className='col-md-4'>
		<a href="#" className="IndchiHa">
			<div className="IndchiHI"><img src={diamondPoolImg} /></div>
			<h3>
				Daily Dimond pool
			</h3>
			<p className="starPool">$0.00</p>
		</a>
		</div>
		<div className='col-md-4'>
		<a href="#" className="IndchiHa">
			<div className="IndchiHI"><img src={referralPoolImg} /></div>
			<h3>
				Daily Referral pool
			</h3>
			<p className="topPool">$0.00</p>
		</a>
		</div>
	</div>
	</div>
	</div>
	<div className='container'>
	<div className="IndchiK Indwark Huans fl-bet">
		
		<div className='row'>
		<div className='col-md-4'>
		<div className="IndchiKL">
			<h3>
				Monthy 40% 
			</h3>
			<center>
			<a href="dashboard.html" className="IndZhua">
				CONTRIBUTE
			</a>
			</center>
		</div>
		</div>
		<div class="col-md-4">
				<div class="IndchiKL">
					<p class="latestDeposit">...</p>
					<p class="latestDeposit">...</p>
					<p class="latestDeposit">...</p>
					<p class="latestDeposit">...</p>
					
				</div>
			</div>
		<div className='col-md-4'>
		<div className="IndchiKR">
			<a href="#" className="IndchiKRa">
				
				<span className="latestDeposit">$0.00</span>
			</a>
			<a href="#" className="IndchiKRa">
				
				<span className="latestDeposit">$0.00</span>
			</a>
			<a href="#" className="IndchiKRa">
			
				<span className="latestDeposit">$0.00</span>
			</a>
			<a href="#" className="IndchiKRa">
				
				<span className="latestDeposit">$0.00</span>
			</a>
		</div>
		</div>
	  </div>	
	</div>
	</div>
</div>
  )
}

export default Pools