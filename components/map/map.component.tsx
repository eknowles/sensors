import React from 'react';
import { FeatureGroup, Map, Popup, Rectangle, TileLayer } from 'react-leaflet';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const MapComponent: React.FC = ({ children }) => {
  const { data } = useSWR(
    '/api/search?sensor_type=CO&fields=box_id,reading,reading_ts,latitude,longitude',
    fetcher
  );

  // for this case I'll not show anything while data is being fetched
  if (!data) {
    return null;
  }

  const center = [51.51885, -0.06507];
  const lats = data.map((d) => d.latitude);
  const lngs = data.map((d) => d.longitude);

  // based on the data all the points have the same lat/lng... :(
  const rectangle = [
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)],
  ];

  return (
    <Map center={center} zoom={13} style={{ width: '100%', height: '100vh' }}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup color="purple">
        <Popup>Area</Popup>
        <Rectangle bounds={rectangle} />
      </FeatureGroup>
    </Map>
  );
};

export default MapComponent;
