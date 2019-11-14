import React from 'react';
import { Link } from '@reach/router';

import { Title } from '../../components/Title/Title';

import './NotFound.page.css';

export const NotFoundPage = () => (
  <div className="NotFoundPage">
    <Title />
    <main className="NotFoundPage__main">
      <h2>Well this doesn't look right!</h2>
      <p>
        We weren't able to find any Shortlink for the url <span>{window.location.href}</span>
      </p>
      <Link to="/" className="NotFoundPage__button">
        Create a new Shortlink
      </Link>
    </main>
  </div>
);
