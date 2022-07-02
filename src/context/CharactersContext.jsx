import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import charactersReducer, { actions, initialState } from '../reducers/reducers';

import { SW_BASE_URL } from '../lib/config';

export const CharactersContext = createContext(initialState);

export const CharactersProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(charactersReducer, initialState);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const { data } = await axios.get(url, { timeout: 10000 });
        dispatch({
          type: actions.UPDATE_CHARACTERS,
          payload: {
            characters: data.results,
          },
        });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData(`${SW_BASE_URL}/people`);
  }, []);

  const filterBySearchTerm = useCallback(
    (searchTerm) => {

      const filteredCharacters = state.characters.filter(c => {
        return c.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
          || c['eye_color'].toLowerCase().includes(searchTerm.trim().toLowerCase())
          || c['hair_color'].toLowerCase().includes(searchTerm.trim().toLowerCase());
      });

      dispatch({
        type: actions.UPDATE_FILTERD_CHARACTERS,
        payload: {
          filteredCharacters,
          searchTerm,
        },
      });
    },
    [state.characters],
  );

  const filterByMultiKeyValues = useCallback(
    (key, values) => {
      const filteredCharacters = state.characters.filter(value =>  values.includes(value[key]))
      dispatch({
        type: actions.UPDATE_FILTERD_CHARACTERS,
        payload: {
          filteredCharacters,
        },
      });
    },
    [state.characters],
  );

  const setSearchTerm = useCallback(
    (searchTerm) => {
      dispatch({
        type: actions.UPDATE_SEARCH_TERM,
        payload: {
          searchTerm,
          filteredCharacters: searchTerm.length < 3 ? [] : state.filteredCharacters,
        },
      });
    },
    [state.filteredCharacters],
  );

  const contextValue = useMemo(() => ({
    ...state,
    charactersData: state.characters,
    characters: state.filteredCharacters.length ? state.filteredCharacters : state.characters,
    filterBySearchTerm,
    filterByMultiKeyValues,
    setSearchTerm,
    loading,
  }), [state, loading, filterBySearchTerm, setSearchTerm, filterByMultiKeyValues]);

  return (
    <CharactersContext.Provider value={contextValue}>
      {children}
    </CharactersContext.Provider>
  );
};

CharactersProvider.propTypes = {
  children: PropTypes.node,
};

const useCharactersContext = () => {
  const context = useContext(CharactersContext);

  if (context === undefined) {
    throw new Error('useCharacters must be used within CharactersContext');
  }

  return context;
};

export default useCharactersContext;
