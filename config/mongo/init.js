/* global db */

const data = [
  {
    url: 'https://google.com',
    shortlink: 'UL2HOsDj',
    dateCreated: '2019-11-13T21:46:25.999Z',
    dateUpdated: '2019-11-13T21:46:25.999Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'ouNxNr1P',
    dateCreated: '2019-11-13T21:46:27.006Z',
    dateUpdated: '2019-11-13T21:46:27.006Z'
  },
  {
    url: 'https://google.com',
    shortlink: '_Vqozc_o',
    dateCreated: '2019-11-13T21:46:27.863Z',
    dateUpdated: '2019-11-13T21:46:27.863Z'
  },
  {
    url: 'https://google.com',
    shortlink: '_Qt26ve3',
    dateCreated: '2019-11-13T21:46:28.556Z',
    dateUpdated: '2019-11-13T21:46:28.556Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'DBvnZSI0',
    dateCreated: '2019-11-13T21:46:29.313Z',
    dateUpdated: '2019-11-13T21:46:29.313Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'P5v2UAquK',
    dateCreated: '2019-11-13T21:46:30.024Z',
    dateUpdated: '2019-11-13T21:46:30.024Z'
  },
  {
    url: 'https://google.com',
    shortlink: '-JIRafmB',
    dateCreated: '2019-11-13T21:46:30.673Z',
    dateUpdated: '2019-11-13T21:46:30.673Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'kYrkpt92',
    dateCreated: '2019-11-13T21:46:31.380Z',
    dateUpdated: '2019-11-13T21:46:31.380Z'
  },
  {
    url: 'https://google.com',
    shortlink: '_ulyh2bG',
    dateCreated: '2019-11-13T21:46:32.121Z',
    dateUpdated: '2019-11-13T21:46:32.121Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'EUF3kisO3',
    dateCreated: '2019-11-13T21:46:32.806Z',
    dateUpdated: '2019-11-13T21:46:32.806Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'rEx2hxPZ',
    dateCreated: '2019-11-13T21:46:33.486Z',
    dateUpdated: '2019-11-13T21:46:33.486Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'gdV9GPUH',
    dateCreated: '2019-11-13T21:46:34.145Z',
    dateUpdated: '2019-11-13T21:46:34.145Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'MSiQraJju',
    dateCreated: '2019-11-13T21:46:34.804Z',
    dateUpdated: '2019-11-13T21:46:34.804Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'm0IvRpZq',
    dateCreated: '2019-11-13T21:46:35.445Z',
    dateUpdated: '2019-11-13T21:46:35.445Z'
  },
  {
    url: 'https://google.com',
    shortlink: '-jZJjmoy',
    dateCreated: '2019-11-13T21:46:36.123Z',
    dateUpdated: '2019-11-13T21:46:36.123Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'GaQrREehu',
    dateCreated: '2019-11-13T21:46:36.817Z',
    dateUpdated: '2019-11-13T21:46:36.817Z'
  },
  {
    url: 'https://google.com',
    shortlink: '1iIno3Aq',
    dateCreated: '2019-11-13T21:46:37.476Z',
    dateUpdated: '2019-11-13T21:46:37.476Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'c_eOI87r',
    dateCreated: '2019-11-13T21:46:38.187Z',
    dateUpdated: '2019-11-13T21:46:38.187Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'C0aNbLIHd',
    dateCreated: '2019-11-13T21:46:38.739Z',
    dateUpdated: '2019-11-13T21:46:38.739Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'IpJhlKt6',
    dateCreated: '2019-11-13T21:46:39.329Z',
    dateUpdated: '2019-11-13T21:46:39.329Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'MXb1BLH88',
    dateCreated: '2019-11-13T21:46:39.904Z',
    dateUpdated: '2019-11-13T21:46:39.904Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'czKQ_WFn',
    dateCreated: '2019-11-13T21:46:40.516Z',
    dateUpdated: '2019-11-13T21:46:40.516Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'dsm-_9f9',
    dateCreated: '2019-11-13T21:46:41.187Z',
    dateUpdated: '2019-11-13T21:46:41.187Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'gsaCpZ1jK',
    dateCreated: '2019-11-13T21:46:41.834Z',
    dateUpdated: '2019-11-13T21:46:41.834Z'
  },
  {
    url: 'https://google.com',
    shortlink: 'BDLAbCyW',
    dateCreated: '2019-11-13T21:46:42.468Z',
    dateUpdated: '2019-11-13T21:46:42.468Z'
  }
];

db.createUser({
  user: 'shortlink',
  pwd: 'shortlink',
  roles: [
    {
      role: 'readWrite',
      db: 'shortlink'
    }
  ]
});

data.forEach(collection => {
  db.collection.insert(collection);
});
