import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Homepage from './pages/Home';

const rootNode = document.getElementById('root');
if (!rootNode){
	throw new Error("No 'root' element found");
}


const root = createRoot(rootNode);

class MyButton extends React.Component {
	render(){
		return(
			<BrowserRouter>
			<Routes>
			 <Route path='/' element={<Homepage/>} />
			</Routes>
			</BrowserRouter>
		)
	}
}


root.render(
	<React.StrictMode>
		<MyButton />
	</React.StrictMode>
);