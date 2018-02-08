import React from 'react';
import MovieContainer from './movie_container';

export default (props) => {
	return (
		<div className="container">
			<h1 className="text-center">iTunes Top 10 - Movies</h1>
			<MovieContainer />
		</div>
	);
};
