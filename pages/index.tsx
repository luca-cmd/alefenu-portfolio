import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title';
import { motion } from 'framer-motion';

const variants = {
	hidden: { opacity: 0, x: -100 },
	enter: { opacity: 1, x: 0 },
};

const Home: NextPage = () => {
	return (
		<Layout title='Home'>
			<div className='flex w-[100%] h-screen justify-center items-center p-12'>
				<div className='text-center'>
					<Title title="Hi, I'm Alessandro" />
					<motion.p
						variants={variants}
						initial={'hidden'}
						animate={'enter'}
						transition={{
							type: 'spring',
							duration: 0.5,
							delay: 0.4,
						}}
						className='text-slate-600'
					>
						and I love math
					</motion.p>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
