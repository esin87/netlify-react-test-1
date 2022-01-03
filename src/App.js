import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [gifs, setGifs] = useState([]);

	function getGifData() {
		const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=minions&limit=10&rating=G&lang=en`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log('We have data!', res.data);
				setGifs(res.data);
			})
			.catch(console.error);
	}

	useEffect(() => {
		getGifData();
	}, []);
  
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
