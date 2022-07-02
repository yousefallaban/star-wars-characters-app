import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CharactersContext } from '../../context/CharactersContext';

import Searchbar from './Searchbar';

describe('src/components/Searchbar/', () => {

  test('It should has correct input value', () => {
    render(
      <CharactersContext.Provider
        value={{
          setSearchTerm: jest.fn(),
          filterBySearchTerm: jest.fn(),
        }}
      >
        <Searchbar />
      </CharactersContext.Provider>,
    );

    const inputEl = screen.getByLabelText('search');
    userEvent.type(inputEl, 'black');
    expect(inputEl).toHaveValue("black");
  });
});
