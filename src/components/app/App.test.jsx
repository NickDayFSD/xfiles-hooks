import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('Displays a list of characters on the home page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    screen.getByAltText('Loading');
    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
  // afterAll(cleanup)
  // it('displays a list of characters on the homepage', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   // screen.getByAltText('Loading');

  //   // const ul = await screen.findByTestId('charList');
  //   // expect(ul).not.toBeEmptyDOMElement();
  // });
});
