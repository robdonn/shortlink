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
          const error = new Error(res.error.message);
          error.code = res.error.code;

          reject(error);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
