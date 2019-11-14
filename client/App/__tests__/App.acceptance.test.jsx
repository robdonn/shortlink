import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { createHistory, createMemorySource, LocationProvider } from '@reach/router';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../App';

describe('App', () => {
  it('submits a url to generate a shortlink', async () => {
    const mockResponse = {
      shortlink: 'mockShortlink'
    };
    fetch.once(JSON.stringify(mockResponse));

    const { getByText, getByLabelText } = render(<App />);

    expect(getByText('Generate link')).toHaveAttribute('disabled');

    fireEvent.change(getByLabelText('URL'), { target: { value: 'http://google.com' } });

    expect(getByText('Generate link')).not.toHaveAttribute('disabled');

    fireEvent.click(getByText('Generate link'));

    await wait(() => expect(getByText('http://localhost/mockShortlink')).toBeInTheDocument());
  });

  it('presents information if shortlink does not exist', async () => {
    window.history.pushState({}, null, '/invalid');
    const history = createHistory(createMemorySource('/invalid'));

    const { getByText } = render(
      <LocationProvider history={history}>
        <App />
      </LocationProvider>
    );

    expect(getByText(`Well this doesn't look right!`)).toBeInTheDocument();
    expect(getByText('http://localhost/invalid')).toBeInTheDocument();

    fireEvent.click(getByText('Create a new Shortlink'));

    await wait(() => expect(getByText('Generate link')).toBeInTheDocument());
  });
});
