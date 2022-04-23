import { motion } from 'framer-motion';
import Head from 'next/head';

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

interface Props {
	children: React.ReactNode;
	title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
	return (
		<motion.main
			variants={variants}
			initial='hidden'
			animate='enter'
			exit='exit'
			transition={{ type: 'linear' }}
		>
			<Head>
				<title>{title} - Alefenu</title>
			</Head>
			{children}
		</motion.main>
	);
};

export default Layout;
