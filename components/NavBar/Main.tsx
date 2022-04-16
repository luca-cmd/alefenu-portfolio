import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { NavLinks, HamburgerLinks } from '../NavLinks/Main';

const Logo: React.FC = () => (
	<div className='flex items-center justify-around'>
		<div className='hidden md:flex mr-2 justify-center items-center'>
			<Image
				className='hover:-rotate-[30deg] transition-all'
				src={'/images/math.svg'}
				alt={'math'}
				height={32}
				width={32}
			/>
		</div>

		<p className='text-lg'>Alefenu</p>
	</div>
);

const Hamburger: React.FC = () => {
	const [open, setOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleChange = () => {
		setOpen(!open);

		if (!buttonRef.current) return;
		if (open === true) return buttonRef.current.blur();

		buttonRef.current.focus();
	};

	return (
		<button
			className='sm:hidden flex justify-center items-center p-4 border-[1px] border-slate-400 rounded-xl relative focus:outline focus:outline-blue-400 focus:border-none transition-all'
			onClick={handleChange}
			ref={buttonRef}
		>
			<FaHamburger />

			{open ? <HamburgerLinks setOpen={setOpen} /> : ''}
		</button>
	);
};

const NavBar: React.FC = () => {
	return (
		<nav className='flex w-screen h-16 items-center sm:justify-around fixed bg-transparent justify-between px-6'>
			<Logo />

			<NavLinks />
			<Hamburger />
		</nav>
	);
};

export default NavBar;
