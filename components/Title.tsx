interface Props {
	title: string;
}

const Title: React.FC<Props> = (props) => {
	const { title } = props;

	return (
		<h1 className='relative -z-10 text-3xl mb-6 transition-all'>{title}</h1>
	);
};

export default Title;
