import Link from 'next/link';

const mateLinks: React.FC = () => {
	const pdfs = [
		'dispensina',
		'garaspano',
		'Shortlist',
		'solgaraspano',
		'spano22-02-2022',
		'spanolezione1',
		'spanolezione2',
		'spanolezione3',
		'spanolezione4',
		'spanolezione5',
		'spanolezione6',
	];

	return (
		<div className='flex w-[100%] h-screen justify-center items-center p-12 flex-col'>
			<h1 className='text-3xl mb-6'>Math</h1>
			<div className='flex justify-center items-center w-[40%] flex-col'>
				{pdfs.map((file) => (
					<Link href={'/pdfs/' + file + '.pdf'} key={file}>
						<a className='text-lg text-slate-700'>{file}</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default mateLinks;
