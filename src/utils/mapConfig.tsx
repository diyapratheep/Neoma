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
    return L.divIcon({
      className: 'custom-marker',
      html: `
      <div class="flex items-center justify-center w-10 h-10 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24">
          <!-- Body (Inverted Oval with Pointed Top) -->
          <path fill="${isHazardous ? '#F97316' : '#3B82F6'}" stroke="#FFFFFF" stroke-width="1" d="M12 15c3 0 6-3 6-6s-3-6-6-6-6 3-6 6 3 6 6 6z" />
          <!-- Head (Circle at the Bottom) -->
          <circle cx="12" cy="18" r="3" fill="${isHazardous ? '#F97316' : '#3B82F6'}" stroke="#FFFFFF" stroke-width="1" />
        </svg>
      </div>
    `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
  };

export const MAP_CONFIG = {
  center: [0, 0] as [number, number],
  zoom: 2,
  minZoom: 2,
  tileLayer: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
};