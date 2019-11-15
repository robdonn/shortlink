import React, { useState } from 'react';
import validUrl from 'valid-url';

import { createShortlink } from '../../logic/createShortlink/createShortlink';
import { Form } from '../../components/Form/Form';
import { Shortlink } from '../../components/Shortlink/Shortlink';
import { Title } from '../../components/Title/Title';

import './Index.page.css';

export const IndexPage = () => {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shortlink, setShortlink] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setUrl(e.target.value);

    setShortlink(null);
    setError(null);

    if (validUrl.isWebUri(e.target.value)) {
      setIsValid(true);
    } else {
      if (isValid) {
        setIsValid(false);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);

    createShortlink(url)
      .then(shortlinkUrl => {
        setShortlink(shortlinkUrl);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="IndexPage">
      <Title />
      <main className="IndexPage__main">
        <Form
          value={url}
          isValid={isValid}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
        <Shortlink shortlink={shortlink} loading={loading} />
      </main>
    </div>
  );
};
