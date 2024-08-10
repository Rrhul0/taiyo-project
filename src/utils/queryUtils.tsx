export const fetchCovidCasesByCountries = async () => {
	const res = await fetch('https://disease.sh/v3/covid-19/countries');
	if (res.ok) {
		const data = (await res.json()) as CountryCaseType[];
		return data;
	}
};
