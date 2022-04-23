import Head from 'next/head';

interface Props {
	children: React.ReactNode;
	title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => (
	<main>
		<Head>
			<title>{title}</title>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<link
				rel='shortcut icon'
				href='/images/favicon.ico'
				type='image/x-icon'
			/>
		</Head>
		{children}
	</main>
);

export default Layout;
