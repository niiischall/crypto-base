export const API_RECALL_TIMER = 900000;

export function normalizePrice(value: any, precision: any = 0) {
  let toReturn = value;
  if (!value) {
    return null;
  }
  const min = 0;
  const max = 99999999;
  if (typeof toReturn === 'string') {
    toReturn = toReturn.replace(/[^0-9.]+/g, '');
    toReturn = parseFloat(toReturn);
  }

  if (toReturn < min) {
    toReturn = min;
  }
  if (toReturn > max) {
    toReturn = max;
  }
  const formatted = toReturn
    .toFixed(precision)
    .replace(/./g, (c: any, i: any, a: any) =>
      i && c !== '.' && (a.length - i) % 3 === 0 ? `,${c}` : c,
    );
  return formatted;
}

export function isCoinPresent(coin: any, data: any[]) {
  return data.find((element: any) => element.slug === coin.slug);
}

export function normalizeText(value: any) {
  if (!value) {
    return null;
  }
  return value;
}

export function normalizeError(error: string) {
  let normalizedError = error;
  normalizedError = error.replace(/_/g, ' ');
  return normalizedError.toLowerCase();
}
