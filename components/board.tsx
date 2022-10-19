import { useState } from 'react';

const Board = () => {
	const [joke, setJoke] = useState('');

	const generateJoke = () => {
		fetch('https://api.chucknorris.io/jokes/random', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				setJoke(data.value);
			});
	};

	const clearJoke = () => {
		setJoke('');
	};
	return (
		<div className="boder">
			<div className="border">
				<div className="buttons">
					<button onClick={() => generateJoke()}>Get a Joke</button>
					<button onClick={() => clearJoke()}>Clear</button>
				</div>
				<div className="joke">{joke}</div>
			</div>
		</div>
	);
};

export default Board;
