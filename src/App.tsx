import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Map from './components/Map';
import InfoPanel from './components/InfoPanel';
import DatePicker from './components/DatePicker';
import { getNearEarthObjects } from './services/nasa';
import { NearEarthObject } from './types/neo';
import { format, addDays } from 'date-fns';

function App() {
  const [objects, setObjects] = useState<NearEarthObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(addDays(new Date(), 7), 'yyyy-MM-dd'));

  const handleSearch = async () => {
    setLoading(true);
    const data = await getNearEarthObjects(startDate, endDate);
    setObjects(data);
    setLoading(false);
  };

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
    <div className="h-screen flex flex-col">
      <div className="p-4 bg-gray-50">
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onSearch={handleSearch}
        />
      </div>
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 lg:w-1/4 overflow-y-auto">
          <InfoPanel objects={objects} />
        </div>
        <div className="flex-1">
          <Map objects={objects} />
        </div>
      </div>
    </div>
  );
}

export default App;