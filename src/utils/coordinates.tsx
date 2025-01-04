// Utility functions for handling coordinates and mapping
export const createRandomEarthCoordinates = (): [number, number] => {
    const lat = Math.random() * 180 - 90;
    const lng = Math.random() * 360 - 180;
    return [lat, lng];
  };