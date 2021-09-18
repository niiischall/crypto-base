import db from '../services/firebase';
import { onSnapshot, collection } from '@firebase/firestore';

import { apiEndPoints, fetchApi } from '../services/api';
import {
  normalizePrice,
  normalizeNotificationMessage,
} from '../services/helpers';

let notificationMessage: string = '';

const getMarketTicker = async (notificationCoins: string[]) => {
  const requestURL = `${apiEndPoints.coinsQuotes}${notificationCoins.join(
    ',',
  )}`;

  const response = await fetchApi(requestURL);
  const json = await response.json();
  const latestQuotes = Object.values(json.data).map((coin: any) => {
    return {
      name: coin.name,
      price: `$${normalizePrice(coin.quote.USD.price)}`,
    };
  });

  return latestQuotes;
};

const getNotificationMessage = async () => {
  const signedInUser: string | null = localStorage.getItem('userId');

  onSnapshot(collection(db, 'users'), async (snapshot: any) => {
    const db = snapshot.docs.map((doc: any) => doc.data());
    const data = db.find((data: any) => data.userId === signedInUser);
    if (data) {
      const notificationCoins = data.notification.map((coin: any) => coin.slug);
      if (notificationCoins.length > 0) {
        const latestQuotes = await getMarketTicker(notificationCoins);
        notificationMessage = normalizeNotificationMessage(latestQuotes);
      } else {
        notificationMessage = '';
      }
    }
  });
};

const notificationInBackground = async () => {
  await getNotificationMessage();
  //Setting up alarm for notification.
  chrome.alarms.create('NOTIFICATION_ALARM', {
    when: Date.now(),
    periodInMinutes: 1,
  });

  //Firing notification upon that alarm.
  chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === 'NOTIFICATION_ALARM') {
      await getNotificationMessage();
      const notificationID = `NOTIFICATION_ID_${new Date().getTime()}`;
      if (notificationMessage) {
        chrome.notifications.create(notificationID, {
          type: 'basic',
          iconUrl: 'img/icon-128.png',
          title: 'CryptoBase Market Watch',
          message: notificationMessage,
          priority: 2,
        });
      }
    }
  });
};

export default notificationInBackground();
