import Link from 'next/link';

const WorkPage: React.FC = () => {
	const linksColumn1 = [
		{ name: 'c algorithm', link: '' },
		{ name: 'Math', link: '/mateLinks' },
		{
			name: 'drive one',
			link: 'https://drive.google.com/drive/u/0/folders/0B1y96avP_V6gfmstNm11clJON052bXNOYUtxTGJvWmFDM2hFQ1RqbFN5NkYxa0tWbU5oT2c',
		},
		{
			name: 'drive two',
			link: 'https://drive.google.com/drive/folders/1vlbpVPOzmh5gO7906Y0xref-VB7st3Yv',
		},
	];

	const linksColumn2 = [
		{
			name: 'Theorem of the day',
			link: 'https://www.theoremoftheday.org/',
		},
		{
			name: 'drive first year',
			link: 'https://drive.google.com/drive/folders/1UO7KykD9vm9C_znCXkECa2hwkEBH0j2Z',
		},
		{ name: 'ETI 2020', link: 'https://ciovil.li/eti20/' },
		{ name: 'ETI 2021', link: 'https://ciovil.li/eti21/' },
	];

	return (
		<div className='flex w-[100%] h-screen justify-center items-center p-12 flex-col'>
			<h1 className='text-3xl z-10 mb-6'>Usefull links</h1>
			<div className='flex justify-around items-center w-[40%]'>
				<div className='flex flex-col'>
					{linksColumn1.map((site) => (
						<p
							className='cursor-pointer text-lg text-slate-700'
							key={site.name}
						>
							<Link href={site.link}>
								<a>{site.name}</a>
							</Link>
						</p>
					))}
				</div>

				<div className='flex flex-col'>
					{linksColumn2.map((site) => (
						<p
							className='cursor-pointer text-lg text-slate-700 '
							key={site.name}
						>
							<Link href={site.link}>
								<a>{site.name}</a>
							</Link>
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkPage;