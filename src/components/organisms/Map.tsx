import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import { useQuery } from '@tanstack/react-query';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { covidCasesByCountryQueryOptions } from '@utils/queryUtils';
import CountryPopupCard from '@molecules/CountryPopupCard';

const defaultIcon = L.icon({
	iconUrl: icon.src,
	shadowUrl: iconShadow.src,
});

const Map = () => {
	const { data: covidData, isLoading } = useQuery(
		covidCasesByCountryQueryOptions
	);

	if (isLoading) return null;
	return (
		<div className="overflow-hidden rounded-lg shadow-lg">
			<MapContainer
				center={[0, 0]}
				zoom={2}
				scrollWheelZoom
				style={{
					width: window.innerWidth - 300,
					height: window.innerHeight / 2 - 150,
				}}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{covidData.map((countryData) => (
					<Marker
						position={[
							countryData.countryInfo.lat,
							countryData.countryInfo.long,
						]}
						icon={defaultIcon}
						key={countryData.country}
					>
						<Popup maxWidth={300}>
							<CountryPopupCard countryCases={countryData} />
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default Map;
