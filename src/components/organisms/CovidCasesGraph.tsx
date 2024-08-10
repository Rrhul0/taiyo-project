import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
	CartesianGrid,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import { covidCasesWithDateQueryOptions } from '@utils/queryUtils';

const CovidCasesGraph = () => {
	const { data: covidCases, isLoading } = useQuery(
		covidCasesWithDateQueryOptions
	);

	if (isLoading) return null;

	const chartData = Object.entries(covidCases.cases).map(([date, cases]) => ({
		date,
		cases,
		deaths: covidCases.deaths[date],
	}));

	return (
		<div className="shadow-lg rounded-lg">
			<LineChart
				width={window.innerWidth - 300}
				height={window.innerHeight / 2 - 150}
				data={chartData}
				margin={{ left: 50 }}
			>
				<Line type="monotone" dataKey="cases" stroke="#8884d8" />
				<Line type="monotone" dataKey="deaths" stroke="#e41a13" />
				<CartesianGrid stroke="#ccc" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
			</LineChart>
		</div>
	);
};

export default CovidCasesGraph;
