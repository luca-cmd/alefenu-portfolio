import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const mateLinks: React.FC = () => {
	const pdfs = [
		'dispensina',
		'garaspano',
		'Shortlist',
		'solgaraspano',
		'spano 22-02-2022',
		'spanolezione1',
		'spanolezione2',
		'spanolezione3',
		'spanolezione4',
		'spanolezione5',
		'spanolezione6',
	];

	return (
		<Layout title='Math'>
			<div className='flex w-[100%] h-screen justify-center items-center p-12 flex-col'>
				<h1 className='text-3xl mb-6'>Math</h1>
				<div className='flex justify-center items-center w-[40%] flex-col'>
					{pdfs.map((file) => (
						<Link href={'/pdfs/' + file + '.pdf'} key={file}>
							<a className='text-lg md:text-left text-center text-slate-700'>
								{file}
							</a>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default mateLinks;
