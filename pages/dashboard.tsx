import dynamic from 'next/dynamic';

import PageLayout from '@organisms/PageLayout';

const Map = dynamic(() => import('@organisms/Map'), {
	ssr: false,
});
const CovidCasesGraph = dynamic(() => import('@organisms/CovidCasesGraph'), {
	ssr: false,
});

const Dashboard = () => {
	return (
		<PageLayout title="Dashboard">
			<div className="flex flex-col gap-4 justify-stretch h-full *:flex-1">
				<div className="flex flex-col gap-4">
					<h1 className="font-semibold text-3xl text-center">
						Worldwide Covid cases with date
					</h1>
					<CovidCasesGraph />
				</div>
				<div className="flex flex-col gap-4">
					<h1 className="font-semibold text-3xl text-center">
						Covid cases for each country
					</h1>
					<Map />
				</div>
			</div>
		</PageLayout>
	);
};

export default Dashboard;
