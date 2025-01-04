import axios from 'axios';
import { NearEarthObject } from '../types/neo';

const NASA_API_KEY = 'DEMO_KEY';
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1';

export async function getNearEarthObjects(startDate: string, endDate: string): Promise<NearEarthObject[]> {
  try {
    const response = await axios.get(`${BASE_URL}/feed`, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: NASA_API_KEY,
      },
    });

    // Flatten all objects from different dates into a single array
    const objects = Object.values(response.data.near_earth_objects).flat() as NearEarthObject[];
    return objects;
  } catch (error) {
    console.error('Error fetching NEO data:', error);
    return [];
  }
}