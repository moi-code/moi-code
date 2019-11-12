import React from 'react';
import Link from 'next/link';

const links = [
	{ href: 'https://zeit.co/now', label: 'ZEIT' },
	{ href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<nav className='navbar navbar-expand-lg navbar-light bg-light'>
		<Link href='/'>
			<a className='navbar-brand'>Moi Code</a>
		</Link>
		<button
			className='navbar-toggler'
			type='button'
			data-toggle='collapse'
			data-target='#moiNavbar'
			aria-controls='moiNavbar'
			aria-expanded='false'
			aria-label='Toggle navigation'>
			<span className='navbar-toggler-icon'></span>
		</button>
		<div className='collapse navbar-collapse' id='moiNavbar'>
			<ul className='navbar-nav mr-auto'>
				<li className='nav-item active'>
					<Link href='/'>
						<a className='nav-link'>
							Home <span className='sr-only'>(current)</span>
						</a>
					</Link>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/github'>
						Moi Git
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/live'>
						Live
					</a>
				</li>
			</ul>
			<span className='navbar-text'>Navbar text with an inline element</span>
		</div>
	</nav>
);

export default Nav;
