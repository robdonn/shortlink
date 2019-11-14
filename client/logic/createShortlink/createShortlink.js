export const createShortlink = url =>
  new Promise((resolve, reject) => {
    fetch('/api/shortlink/new', {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        url
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.shortlink) {
          resolve(`${window.location.href}${res.shortlink}`);
        } else {
          reject(new Error(res.error));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
