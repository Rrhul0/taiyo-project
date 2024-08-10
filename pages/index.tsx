import { GetServerSideProps } from 'next';

const Page = () => {
	return <div></div>;
};

export default Page;

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			destination: '/dashboard',
			permanent: true,
		},
	};
};
