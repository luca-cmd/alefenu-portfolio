import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title';
import { mateLinksFiles } from '../lib/links';

const mateLinks: React.FC = () => {
	return (
		<Layout title='Math'>
			<div className='flex w-[100%] h-screen justify-center items-center p-12 flex-col'>
				<Title title='Math' />
				{mateLinksFiles.map((file) => (
					<div key={file.name} className='flex flex-col justify-center'>
						<Link href={file.file}>
							<a className='text-lg text-center text-slate-700 p-[2px]'>
								{file.name}

								<hr className='w-44 border-[1px] border-slate-100' />
							</a>
						</Link>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default mateLinks;
