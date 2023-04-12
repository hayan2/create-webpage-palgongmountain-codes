import './Map.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'


export default function Location() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyBT5zk7292oIqXCCcrZRG8xNFlQVWxTrH4"
	});

	if (!isLoaded) return <div></div>
	return <Map />
}

function Map() {
	const center = { 'lat': 36.017533, 'lng': 128.695858 };	

	return (
		<GoogleMap
			zoom={15}
			center={ center }
			mapContainerClassName="map-container"
		>
			<Marker position={ center }></Marker>
		</GoogleMap>
	)
}