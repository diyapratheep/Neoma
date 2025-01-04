import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import Map from './components/Map';
import InfoPanel from './components/InfoPanel';
import { getNearEarthObjects } from './services/nasa';
import { NearEarthObject } from './types/neo';

function App() {
  const [objects, setObjects] = useState<NearEarthObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getNearEarthObjects();
      setObjects(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto" />
          <p className="mt-4 text-gray-600">Loading near-earth objects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 lg:w-1/4 overflow-y-auto">
        <InfoPanel objects={objects} />
      </div>
      <div className="flex-1">
        <Map objects={objects} />
      </div>
    </div>
  );
}

export default App;