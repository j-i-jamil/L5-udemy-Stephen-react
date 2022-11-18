// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client'
// Create a react component

const App = () => {
	const buttonText = 'Click Me';
	const buttonText2 = {
		click: 'Click me',
	};
	const buttonText3 = ['Click', 'Me'];
	return (
		<div>
			<label htmlFor="name" className="label">
				Enter name: {}
			</label>
			<input type="text" id="name" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText2.click}</button>
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText3}</button>
		</div>
	);
};

// Render
ReactDOM.render(<App />, document.querySelector('#root'));
// createRoot(document.querySelector('.root')).render(<h1>Jamil</h1>)
