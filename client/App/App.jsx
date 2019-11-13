import React, { Fragment, useState } from 'react';

export const App = () => {
  const [value, setValue] = useState('');
  const [shortlink, setShortlink] = useState(null);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/api/shortlink/new', {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        url: value
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
      <h1>Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {shortlink && (
        <a href={shortlink} target="_blank" rel="noopener noreferrer">
          {shortlink}
        </a>
      )}
    </Fragment>
  );
};
