import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title';
import { links } from '../lib/links';

const WorkPage: React.FC = () => {
	const linksColumn1 = links.slice(0, Math.ceil(links.length / 2));
	const linksColumn2 = links.slice(Math.ceil(links.length / 2), links.length);
	const totalLinks = [linksColumn1, linksColumn2];

	return (
		<Layout title='Work'>
			<div className='flex w-[100%] min-h-screen justify-center items-center py-20 flex-col overflow-hidden'>
				<Title title='Usefull links' />
				<div className='flex justify-around items-start lg:flex-row flex-col'>
					{totalLinks.map((linksColumn, i) => (
						<div
							key={i}
							className='flex flex-col justify-center items-center w-48'
						>
							{linksColumn.map((site) => (
								<div
									className='flex flex-col justify-center items-center lg:items-start'
									key={site.name}
								>
									<p className='cursor-pointer text-lg text-slate-700'>
										<Link href={site.link}>
											<a className='py-[2px]'>{site.name}</a>
										</Link>
									</p>

									<hr className='w-44 border-[1px] border-slate-100' />
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default WorkPage;
