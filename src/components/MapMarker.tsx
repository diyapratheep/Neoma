import { Marker, Popup } from 'react-leaflet';
import { NearEarthObject } from '../types/neo';
import { createCustomIcon } from '../utils/mapConfig';

interface MapMarkerProps {
  object: NearEarthObject;
  position: [number, number];
}

export default function MapMarker({ object, position }: MapMarkerProps) {
  const icon = createCustomIcon(object.is_potentially_hazardous_asteroid);

  return (
    <Marker position={position} icon={icon}>
      <Popup>
        <div className="p-2">
          <h3 className="font-bold text-lg">{object.name}</h3>
          <p className="text-sm">
            Diameter: {object.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} - {object.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
          </p>
          <p className="text-sm">
            Potentially Hazardous: {object.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
          </p>
          {object.close_approach_data[0] && (
            <>
              <p className="text-sm">
                Velocity: {parseFloat(object.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h
              </p>
              <p className="text-sm">
                Miss Distance: {parseFloat(object.close_approach_data[0].miss_distance.kilometers).toFixed(2)} km
              </p>
            </>
          )}
        </div>
      </Popup>
    </Marker>
  );
}