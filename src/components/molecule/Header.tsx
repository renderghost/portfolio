import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
	return (
		<header className='bg-white shadow-md'>
			<div className='container mx-auto px-4 py-6 flex justify-between items-center'>
				<Link to='/' className='text-2xl font-serif text-primary'>
					Barry Prendergast
				</Link>
				<nav className='hidden md:flex space-x-4'>
					<Link to='/' className='text-text hover:text-primary'>
						Home
					</Link>
					<Link
						to='/portfolio'
						className='text-text hover:text-primary'
					>
						Portfolio
					</Link>
					<Link to='/about' className='text-text hover:text-primary'>
						About
					</Link>
					<Link
						to='/articles'
						className='text-text hover:text-primary'
					>
						Articles
					</Link>
				</nav>
				<button className='md:hidden'>
					<Menu className='text-text' />
				</button>
			</div>
		</header>
	);
};

export default Header;
