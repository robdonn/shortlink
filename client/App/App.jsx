import React, { Fragment, useState } from 'react';
import { hot } from 'react-hot-loader';
import validUrl from 'valid-url';

const AppComponent = () => {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [shortlink, setShortlink] = useState(null);

  const handleChange = e => {
    setUrl(e.target.value);

    setShortlink(null);

    if (validUrl.isUri(e.target.value)) {
      setIsValid(true);
    } else {
      if (isValid) {
        setIsValid(false);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

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
          const url = `${window.location.href}${res.shortlink}`;
          setShortlink(url);
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <Fragment>
      <h1>Shortlink</h1>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input type="text" name="name" value={url} onChange={handleChange} />
        </label>
        <input disabled={!isValid} type="submit" value="Submit" />
      </form>
      {shortlink && (
        <a href={shortlink} target="_blank" rel="noopener noreferrer">
          {shortlink}
        </a>
      )}
    </Fragment>
  );
};

export const App = hot(module)(AppComponent);
