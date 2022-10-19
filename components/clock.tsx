import React, { useEffect, useState } from 'react';

const Clock = () => {
	const [time, setTime] = useState('');

	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
	}, []);
	return <div className="clock">{time}</div>;
};

export default Clock;
