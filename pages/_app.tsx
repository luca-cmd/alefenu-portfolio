import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Main';
import NavBar from '../components/NavBar/Main';
import '@fontsource/work-sans';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

if (typeof window !== 'undefined') {
	window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }: AppProps) {
	const [dropDown, setDropDown] = useState(false);

	return (
		<Layout title='Alefenu' dropDown={dropDown} setDropDown={setDropDown}>
			<NavBar
				path={router.asPath}
				dropDown={dropDown}
				setDropDown={setDropDown}
			/>
			<AnimatePresence
				exitBeforeEnter
				initial={true}
				onExitComplete={() => {
					if (typeof window !== 'undefined') {
						window.scrollTo({ top: 0 });
					}
				}}
			>
				<Component {...pageProps} setDropDown={setDropDown} />
			</AnimatePresence>
		</Layout>
	);
}

export default MyApp;
