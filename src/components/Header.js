import React from 'react';
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'

const Header = ({ handleToggleDarkMode, darkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				{!darkMode ? <FaSun color='#F28C38' /> : <FaMoon color='#0C090A' />}
			</button>
		</div>
	);
};

export default Header;
