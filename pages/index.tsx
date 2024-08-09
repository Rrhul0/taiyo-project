import { GetServerSideProps } from 'next';

const Page = () => {
	return null;
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
