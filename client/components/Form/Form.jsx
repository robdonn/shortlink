import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

export const Form = ({ value, handleChange, handleSubmit, isValid, error }) => (
  <form onSubmit={handleSubmit} className="Form">
    <label className="Form__label">
      <span className="Form__label-name">URL</span>
      <input
        type="text"
        name="URL Input"
        value={value}
        onChange={handleChange}
        className="Form__input"
        placeholder="Enter your URL here"
      />
      <span className="Form__error">{error && error.message}</span>
    </label>
    <input disabled={!isValid} type="submit" value="Generate link" className="Form__submit" />
  </form>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired
  })
};
