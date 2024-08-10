import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@organisms/Map'), {
	ssr: false,
	loading: () => <p>A map is loading</p>,
});

const Dashboard = () => {
	return <Map />;
};

export default Dashboard;
