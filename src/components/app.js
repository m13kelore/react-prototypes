import React from 'react';
import Table from './table';

const students = [
	{
		name: 'Takashi Shirogane',
		course: 'Leadership',
		grade: 91
	},
	{
		name: 'Keith Kogane',
		course: 'Being Cute',
		grade: 100
	},
	{
		name: 'Pidge Gunderson',
		course: 'Care for Robots',
		grade: 98
	}
];

const App = () => {
	return (
		<div className="container">
			<h1>Student Grade Table</h1>
			<Table data={students} />
		</div>
	);
};

export default App;
