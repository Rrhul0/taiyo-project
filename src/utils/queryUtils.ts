import { queryOptions } from '@tanstack/react-query';

const fetchCovidCasesByCountries = async () => {
	const res = await fetch('https://disease.sh/v3/covid-19/countries');
	if (res.ok) {
		const data = (await res.json()) as CountryCaseType[];
		return data;
	}
};

const fetchCovidCasesWithDate = async () => {
	const res = await fetch(
		'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
	);
	if (res.ok) {
		const data = (await res.json()) as TCovidCasesWithDate;
		return data;
	}
};

export const covidCasesWithDateQueryOptions = queryOptions({
	queryKey: ['covid-cases-with-date'],
	queryFn: fetchCovidCasesWithDate,
});

export const covidCasesByCountryQueryOptions = queryOptions({
	queryKey: ['covid-countries'],
	queryFn: fetchCovidCasesByCountries,
});
