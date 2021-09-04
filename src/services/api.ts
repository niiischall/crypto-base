const baseAPI = 'https://pro-api.coinmarketcap.com/';
const apiVersion = 'v1';
const apiKey = `&CMC_PRO_API_KEY=${process.env.REACT_APP_CMC_KEY}`;

export const apiEndPoints = {
  totalCoins:
    '/cryptocurrency/map?sort=cmc_rank&limit=500&listing_status=active',
  popularCoins: '/cryptocurrency/listings/latest?limit=25',
  trendingCoins:
    '/cryptocurrency/listings/latest?sort=percent_change_24h&limit=25',
  coinsInfo: '/cryptocurrency/info?slug=',
};

export async function fetchApi(
  endPoint: string,
  payload?: {} | undefined,
  method: string = 'get',
  headers?: {},
) {
  let path = `${baseAPI}${apiVersion}${endPoint}${apiKey}`;
  const headersObject: any = {
    ...headers,
  };
  let request = {
    body: JSON.stringify(payload),
    headers: headersObject,
    method: method.toLowerCase(),
  };

  try {
    return fetch(path, request);
  } catch (e: any) {
    const stringError = e && e.toString && e.toString();
    const type =
      stringError === 'TypeError: Network request failed'
        ? 'networkError'
        : 'unknown';
    const error = {
      text: stringError,
      type,
    };
    throw error;
  }
}
