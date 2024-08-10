type CountryCaseType = {
	country: string;
	countryInfo: {
		lat: number;
		long: number;
		flag: string;
	};
	cases: number;
	todaycases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	todayRecovered: number;
	active: number;
	critical: number;
	tests: number;
	population: number;
	continent: string;
};

type TCovidCasesWithDate = {
	cases: Record<string, number>;
	deaths: Record<string, number>;
};
