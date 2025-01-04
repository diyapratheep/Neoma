import L from 'leaflet';

// Configure default Leaflet markers
export const configureLeafletMarkers = () => {
  delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
};

// Custom icons for hazardous and non-hazardous objects
export const createCustomIcon = (isHazardous: boolean) => {
  return   L.divIcon({
    className: 'custom-icon',
    html: `
      <div class="flex items-center justify-center w-10 h-10 ${
        isHazardous ? 'bg-orange-500' : 'bg-blue-500'
      } rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 4c3.333 0 6 2.667 6 6H6c0-3.333 2.667-6 6-6z"/>
        </svg>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });}

export const MAP_CONFIG = {
  center: [0, 0] as [number, number],
  zoom: 2,
  minZoom: 2,
  tileLayer: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
};