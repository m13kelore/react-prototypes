import React from 'react';
import puppy from './images/corgi-puppy-6.jpg';
import './scrapbook.css';

const Scrapbook = () => {
	return (
		<div className="scrapbook-container">
			<img src={puppy} />
		</div>
	);
};

export default Scrapbook;
