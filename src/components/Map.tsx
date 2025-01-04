import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NearEarthObject } from '../types/neo';
import { createRandomEarthCoordinates } from '../utils/coordinates';
import { configureLeafletMarkers, MAP_CONFIG } from '../utils/mapConfig';
import MapMarker from './MapMarker';

// Configure Leaflet markers
configureLeafletMarkers();

interface MapProps {
  objects: NearEarthObject[];
}

export default function Map({ objects }: MapProps) {
  const [markers, setMarkers] = useState<Array<[number, number]>>([]);

  useEffect(() => {
    if (objects.length > 0) {
      const newMarkers = objects.map(() => createRandomEarthCoordinates());
      setMarkers(newMarkers);
    }
  }, [objects]);

  return (
    <MapContainer
      center={MAP_CONFIG.center}
      zoom={MAP_CONFIG.zoom}
      minZoom={MAP_CONFIG.minZoom}
      className="w-full h-[calc(100vh-4rem)]"
    >
      <TileLayer
        url={MAP_CONFIG.tileLayer.url}
        attribution={MAP_CONFIG.tileLayer.attribution}
      />
      {markers.map((position, index) => (
        <MapMarker
          key={objects[index].id}
          object={objects[index]}
          position={position}
        />
      ))}
    </MapContainer>
  );
}