import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
	return (
		<Layout title='Home'>
			<div className='flex w-[100%] h-screen justify-center items-center p-12'>
				<div className='text-center'>
					<h1 className='text-3xl mb-6'>Hi, I&apos;m Alessandro</h1>
					<p className='text-slate-600'>and I love math</p>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
