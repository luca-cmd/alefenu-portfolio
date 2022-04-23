import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title';

const Home: NextPage = () => {
	return (
		<Layout title='Home'>
			<div className='flex w-[100%] h-screen justify-center items-center p-12'>
				<div className='text-center'>
					<Title title="Hi, I'm Alessandro" />
					<p className='text-slate-600'>and I love math</p>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
