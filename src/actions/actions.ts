import { apiEndPoints, fetchApi } from '../services/api';

export async function getMarketTicker() {
  try {
    const response = await fetchApi(apiEndPoints.latestListing);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      console.log('Error in fetching!');
    }
  } catch (error) {
    console.log('Error in fetching!');
  }
}
