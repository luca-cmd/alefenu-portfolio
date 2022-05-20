import Head from 'next/head';

interface Props {
	children: React.ReactNode;
	title: string;
	setDropDown: Function;
	dropDown: boolean;
}

const Layout: React.FC<Props> = ({
	children,
	title,
	setDropDown,
	dropDown,
}) => {
	const handleDropDown = () => {
		if (dropDown == true) return setDropDown(false);
	};

	return (
		<main onClick={() => handleDropDown()}>
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
};

export default Layout;
