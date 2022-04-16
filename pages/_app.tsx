import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Main';
import NavBar from '../components/NavBar/Main';
import '@fontsource/work-sans';
import { AnimatePresence } from 'framer-motion';

if (typeof window !== 'undefined') {
	window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<Layout title='Alefenu'>
			<NavBar path={router.asPath} />
			<AnimatePresence
				exitBeforeEnter
				initial={true}
				onExitComplete={() => {
					if (typeof window !== 'undefined') {
						window.scrollTo({ top: 0 });
					}
				}}
			>
				<Component {...pageProps} />
			</AnimatePresence>
		</Layout>
	);
}

export default MyApp;
