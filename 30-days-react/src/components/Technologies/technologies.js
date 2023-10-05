import React from 'react';
import image from '../../images/frontend_technologies.png';

function Technologies() {
	return (
		<div className="App">
			<div>
				<div>Hello World</div>
				{/* You should define the 'image' variable or import the image here */}
				<img src={image} alt="Frontend Technologies" />
			</div>

			<div>
				<div className="newsLetter">
					<h1>SUBSCRIBE</h1>
					<p>Sign up with your email address to receive news and updates.</p>
					<div className="inputs">
						<input type="text" placeholder="First name" />
						<input type="text" placeholder="Last name" />
						<input type="text" placeholder="Email" />
					</div>
					<button>Subscribe</button>
				</div>
			</div>
		</div>
	);
}

export default Technologies;
