import Link from 'next/link';

type activeLink = 'About' | 'Work';

type LinksType = {
	name: activeLink;
	link: string;
};

const links: Array<LinksType> = [
	{ name: 'About', link: '/' },
	{ name: 'Work', link: '/work' },
];

interface Links {
	path: string;
}

export const NavLinks: React.FC<Links> = (props) => {
	const { path } = props;

	return (
		<ul className='sm:flex w-[20%] justify-between items-center hidden'>
			{links.map((link) => (
				<li className='cursor-pointer' key={link.name}>
					<div
						className={`h-8 w-20 transition-all flex justify-center items-center
							${path == link.link ? 'bg-blue-400 rounded-2xl ' : 'bg-transparent'}`}
					>
						<Link href={link.link}>
							<a className={'outline-none'}>{link.name}</a>
						</Link>{' '}
					</div>
				</li>
			))}
		</ul>
	);
};

interface HamburgerLinksProps {
	setOpen: Function;
}

export const HamburgerLinks: React.FC<HamburgerLinksProps> = (props) => {
	const { setOpen } = props;
	return (
		<div className='absolute z-10 top-14 bg-slate-100 border-2 border-blue-100 rounded-xl right-0 transition-all'>
			<ul className='w-36 p-2 text-left'>
				{links.map((link) => (
					<li className='cursor-pointer py-2 w-[100%]' key={link.name}>
						<Link href={link.link}>
							<a
								className='outline-none p-2 text-left'
								onClick={() => setOpen(false)}
							>
								{link.name}
							</a>
						</Link>{' '}
					</li>
				))}
			</ul>
		</div>
	);
};
