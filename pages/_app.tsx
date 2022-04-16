import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Main';
import NavBar from '../components/NavBar/Main';
import '@fontsource/work-sans';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout title='Alefenu'>
			<NavBar />

			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
