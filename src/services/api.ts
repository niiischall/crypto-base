const baseCoinAPI = 'https://pro-api.coinmarketcap.com/';
const baseAuthAPI = 'https://identitytoolkit.googleapis.com/';
const apiVersion = 'v1';
const authVersion = 'v1';
const apiKey = `&CMC_PRO_API_KEY=${process.env.REACT_APP_CMC_KEY}`;
const authKey = `?key=${process.env.REACT_APP_AUTH_KEY}`;

export const apiEndPoints = {
  totalCoins:
    '/cryptocurrency/map?sort=cmc_rank&limit=500&listing_status=active',
  popularCoins: '/cryptocurrency/listings/latest?limit=25',
  trendingCoins:
    '/cryptocurrency/listings/latest?sort=percent_change_24h&limit=25',
  coinsInfo: '/cryptocurrency/info?slug=',
  coinsQuotes: '/cryptocurrency/quotes/latest?slug=',
  signUp: `/accounts:signUp`,
  signIn: `/accounts:signInWithPassword`,
};

export async function fetchApi(
  endPoint: string,
  payload?: {} | undefined,
  method: string = 'get',
  headers?: {},
) {
  let path = `${baseCoinAPI}${apiVersion}${endPoint}${apiKey}`;
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

export async function authApi(
  endPoint: string,
  method: string,
  payload: {},
  headers?: {},
) {
  const path = `${baseAuthAPI}${authVersion}${endPoint}${authKey}`;
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
