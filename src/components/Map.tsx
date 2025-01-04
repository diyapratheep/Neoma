import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { NearEarthObject } from '../types/neo';
import { Asteroid, Comet } from 'lucide-react';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  objects: NearEarthObject[];
}

const createRandomEarthCoordinates = () => {
  const lat = Math.random() * 180 - 90;
  const lng = Math.random() * 360 - 180;
  return [lat, lng] as [number, number];
};

export default function Map({ objects }: MapProps) {
  const [markers, setMarkers] = useState<Array<[number, number]>>([]);
  const [isMarkersReady, setIsMarkersReady] = useState(false);

  useEffect(() => {
    if (objects.length > 0) {
      const newMarkers = objects.map(() => createRandomEarthCoordinates());
      setMarkers(newMarkers);
      setIsMarkersReady(true);
    }
  }, [objects]);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      className="w-full h-[calc(100vh-4rem)]"
      minZoom={2}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {isMarkersReady && markers.map((position, index) => (
        <Marker 
          key={objects[index].id} 
          position={position}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{objects[index].name}</h3>
              <p className="text-sm">
                Diameter: {objects[index].estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} - {objects[index].estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
              </p>
              <p className="text-sm">
                Potentially Hazardous: {objects[index].is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
              </p>
              {objects[index].close_approach_data[0] && (
                <>
                  <p className="text-sm">
                    Velocity: {parseFloat(objects[index].close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h
                  </p>
                  <p className="text-sm">
                    Miss Distance: {parseFloat(objects[index].close_approach_data[0].miss_distance.kilometers).toFixed(2)} km
                  </p>
                </>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}