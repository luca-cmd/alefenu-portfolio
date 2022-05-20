import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { HamburgerLinks, NavLinks } from './NavLinks';

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

		<Link href={'/'}>
			<a className='text-lg outline-none'>Alefenu</a>
		</Link>
	</div>
);

const Hamburger: React.FC<Props> = (props) => {
	const { dropDown, setDropDown } = props;
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleChange = () => {
		setDropDown(!dropDown);

		if (!buttonRef.current) return;
		if (dropDown === true) return buttonRef.current.blur();

		buttonRef.current.focus();
	};

	return (
		<button
			className='sm:hidden flex justify-center items-center p-4 border-[1px] border-slate-400 rounded-xl relative focus:outline focus:outline-blue-200 focus:border-none transition-all'
			onClick={handleChange}
			ref={buttonRef}
		>
			<FaHamburger />
			{dropDown ? <HamburgerLinks setOpen={setDropDown} /> : ''}
		</button>
	);
};

interface Props {
	path: string;
	dropDown: boolean;
	setDropDown: Function;
}

const NavBar: React.FC<Props> = (props) => {
	const { path, dropDown, setDropDown } = props;
	return (
		<nav className='flex w-screen h-16 items-center sm:justify-around fixed bg-white/60 justify-between px-6 backdrop-blur-3xl'>
			<Logo />

			<NavLinks path={path} />
			<Hamburger dropDown={dropDown} setDropDown={setDropDown} path='' />
		</nav>
	);
};

export default NavBar;
