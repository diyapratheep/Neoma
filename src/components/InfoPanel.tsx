import { format } from 'date-fns';
import { NearEarthObject } from '../types/neo';
import { AlertTriangle, Info } from 'lucide-react';

interface InfoPanelProps {
  objects: NearEarthObject[];
}

export default function InfoPanel({ objects }: InfoPanelProps) {
  const hazardousCount = objects.filter(obj => obj.is_potentially_hazardous_asteroid).length;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Near-Earth Objects</h2>
        <span className="text-sm text-gray-500">
          {format(new Date(), 'MMMM d, yyyy')}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Total Objects</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{objects.length}</p>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span className="font-semibold">Potentially Hazardous</span>
          </div>
          <p className="text-2xl font-bold text-amber-600">{hazardousCount}</p>
        </div>
      </div>

      <div className="space-y-2">
        {objects.slice(0, 5).map(obj => (
          <div key={obj.id} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-medium">{obj.name}</span>
              {obj.is_potentially_hazardous_asteroid && (
                <span className="px-2 py-1 text-xs bg-amber-100 text-amber-700 rounded-full">
                  Hazardous
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">
              Diameter: {obj.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} - {obj.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}