import axios from 'axios';
import { NearEarthObject } from '../types/neo';

const NASA_API_KEY = 'vVjykd5Jxp7pz8JXvab72KsQ0j3phqmxzokAWLuZ'; // Replace with your NASA API key
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1';

export async function getNearEarthObjects(): Promise<NearEarthObject[]> {
  try {
    const startDate = new Date().toISOString().split('T')[0];
    const response = await axios.get(`${BASE_URL}/feed`, {
      params: {
        start_date: startDate,
        end_date: startDate,
        api_key: NASA_API_KEY,
      },
    });

    const objects = Object.values(response.data.near_earth_objects)[0] as NearEarthObject[];
    return objects;
  } catch (error) {
    console.error('Error fetching NEO data:', error);
    return [];
  }
}