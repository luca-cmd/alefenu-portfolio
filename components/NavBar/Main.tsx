import Link from 'next/link';
import Image from 'next/image';
import React, { Ref, useRef, useState } from 'react';

// `

const Logo: React.FC = () => (
	<div className='flex items-center justify-around w-[10%]'>
		<Image src={'/images/math.svg'} alt={'math'} height={32} width={32} />
		<p className='text-lg'>Alefenu</p>
	</div>
);

const NavBar: React.FC = () => {
	const aboutRef = useRef();
	const workRef = useRef();
	const [active, setActive] = useState(aboutRef);

	return (
		<nav className='flex w-[100%] h-12 items-center justify-around fixed bg-transparent'>
			<Logo />
			<ul className='flex w-[20%] justify-between items-center'>
				<li className='cursor-pointer'>
					<div
						className={`h-8 w-20 transition-all flex justify-center items-center
							${active == aboutRef ? 'bg-blue-400 rounded-2xl ' : 'bg-white'}`}
						onClick={() => setActive(aboutRef)}
					>
						<Link href={'/'}>
							<a>about</a>
						</Link>{' '}
					</div>
				</li>
				<li className='cursor-pointer'>
					<div
						className={`h-8 w-20 transition-all flex justify-center items-center
							${active == workRef ? 'bg-blue-400 rounded-2xl ' : 'bg-white'}`}
						onClick={() => setActive(workRef)}
					>
						<Link href={'/work'}>
							<a>work</a>
						</Link>{' '}
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
