import React from 'react';
import './color.css';

function Colors() {
	const str = '0123456789abcdef';
	const colors = Array.from({ length: 6 }, () => {
		let color = '#';
		for (let i = 0; i < 6; i++) {
			const randomIndex = Math.floor(Math.random() * str.length);

			color += str[randomIndex];
		}
		return color;
	});
	console.log(colors);

	return (
		<div className="color-container">
			{colors.map((color, index) => (
				<button
					className="color-button"
					key={index}
					style={{ backgroundColor: color }}>
					{color}
				</button>
			))}
		</div>
	);
}

export default Colors;
