import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';

// Placeholder components for our pages
const Home: React.FC = () => <div>Home Page</div>;
const Portfolio: React.FC = () => <div>Portfolio Page</div>;
const About: React.FC = () => <div>About Page</div>;
const Articles: React.FC = () => <div>Articles Page</div>;

const App: React.FC = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow container mx-auto px-4 py-8'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/about' element={<About />} />
					<Route path='/articles' element={<Articles />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
