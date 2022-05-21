import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title';
import { mateLinksFiles } from '../lib/links';
import { motion } from 'framer-motion';

const variantElement = {
	hidden: { opacity: 0, x: -100 },
	enter: { opacity: 1, x: 0 },
};

const mateLinks: React.FC = () => {
	return (
		<Layout title='Math'>
			<div className='flex w-[100%] min-h-screen justify-center items-center py-20 flex-col overflow-hidden'>
				<Title title='Math' />
				{mateLinksFiles.map((file, i) => (
					<motion.div
						variants={variantElement}
						initial={'hidden'}
						animate={'enter'}
						transition={{
							type: 'spring',
							duration: 0.5,
							delay: i / 15,
						}}
						key={file.name}
						className='flex flex-col justify-center'
					>
						<Link href={file.file}>
							<a className='text-lg text-center text-slate-700 p-[2px]'>
								{file.name}

								<hr className='w-44 border-[1px] border-slate-100' />
							</a>
						</Link>
					</motion.div>
				))}
			</div>
		</Layout>
	);
};

export default mateLinks;
