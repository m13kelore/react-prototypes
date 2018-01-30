import React from 'react';
import imageData from './image_data';
import ScrapbookImage from './scrapbook_image';
import './scrapbook.css';

const Scrapbook = () => {
	const images = imageData.map((image, index) => {
		return <ScrapbookImage key={index} about={image} />;
	});
	return <div className="scrapbook-container">{images}</div>;
};

export default Scrapbook;
