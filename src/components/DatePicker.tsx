import { Calendar } from 'lucide-react';

interface DatePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onSearch: () => void;
}

export default function DatePicker({ 
  startDate, 
  endDate, 
  onStartDateChange, 
  onEndDateChange,
  onSearch
}: DatePickerProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <div className="relative">
          <input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            max={endDate}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          End Date
        </label>
        <div className="relative">
          <input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            min={startDate}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex items-end">
        <button
          onClick={onSearch}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Go
        </button>
      </div>
    </div>
  );
}