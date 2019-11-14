import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-text-to-clipboard';

import './Shortlink.css';

export const Shortlink = ({ shortlink, loading }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = e => {
    e.preventDefault();

    copy(shortlink);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (shortlink) {
    return (
      <div className="Shortlink">
        <p className="Shortlink__details">
          <a href={shortlink} target="_blank" rel="noopener noreferrer" className="Shortlink__link">
            {shortlink}
          </a>
        </p>
        <button className="Shortlink__button" onClick={handleClick} disabled={copied}>
          {copied ? 'Copied to clipboard!' : 'Click here to copy to clipboard'}
        </button>
      </div>
    );
  }

  return null;
};

Shortlink.propTypes = {
  loading: PropTypes.bool.isRequired,
  shortlink: PropTypes.string
};

Shortlink.defaultProps = {
  shortlink: ''
};
