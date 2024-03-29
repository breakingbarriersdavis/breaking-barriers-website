import './whoWeAre.css';

import React, { useEffect } from 'react';

const WhoWeAre = () =>{
	return(
		<React.Fragment>
			<div className="barriers-home-part-two">
				<div className="who-we-are-pic">
					<img id="who-pic" src="images/team.png"/>
					<img id="who-frame" src="images/who-we-are-pic-frame.svg"/>
				</div>
				<div className="who-we-are-text">
					<h1>Who We Are</h1>
					<p> We are a <strong>student-led organization at UC<br/>
					Davis </strong>to build lasting relationships<br/>
					with older adults through various projects. The<br/>
					gap between older adults and the younger<br/>
					generations does not get any smaller as time<br/>
					goes on.</p>
					<div className="who-we-are-text-button">
						<button><a href="/team">learn more ></a></button>
					</div>
				</div>
			</div>
			
		</React.Fragment>
	);
}

export default WhoWeAre; 