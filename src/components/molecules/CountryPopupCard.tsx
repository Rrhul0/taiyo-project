import React from 'react';

const CountryPopupCard = ({
	countryCases,
}: {
	countryCases: CountryCaseType;
}) => {
	return (
		<div>
			<div className="flex items-center gap-2">
				<img
					src={countryCases.countryInfo.flag}
					alt={countryCases.country}
					width={32}
				/>
				<div className="text-xl font-semibold line-clamp-1 min-w-60">{`${countryCases.country} (${countryCases.continent})`}</div>
			</div>
			<span className="text-lg">Population: {countryCases.population}</span>
			<div className="text-lg">
				<span>Total cases: </span>
				<span>{countryCases.cases}</span>
			</div>
			<div className="text-lg">
				<span>Active cases: </span>
				<span>{countryCases.active}</span>
			</div>
			<div className="text-lg">
				<span>Critical cases: </span>
				<span>{countryCases.critical}</span>
			</div>
			<div className="text-lg">
				<span>Total deaths: </span>
				<span>{countryCases.deaths}</span>
			</div>
		</div>
	);
};

export default CountryPopupCard;
