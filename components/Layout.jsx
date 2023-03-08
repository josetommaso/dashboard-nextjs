import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<main className="bg-gray-100 min-h-screen">
			<Header />
			{children}
		</main>
	);
};

export default Layout;
