/* eslint-disable */
import idb from 'idb';

const request = {};

request.addHeadlines = articles => {
  if (!navigator.serviceWorker) {
    return Promise.resolve();
  }
  const dbPromise = idb
    .open('top-headlines', 1, upgradeDB => upgradeDB.createObjectStore('headlines'))
    .then(db => {
      const tx = db.transaction('headlines', 'readwrite');
      articles.forEach(article => {
        tx.objectStore('headlines').put(article, article.url);
      });
      return tx.complete;
    });
};

export default request;
