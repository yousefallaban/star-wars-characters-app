import React, { createContext, useContext, useReducer, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import charactersReducer, { actions, initialState } from '../reducers/reducers';
import { SW_BASE_URL } from '../lib/config';

export const CharactersContext = createContext(initialState);

export const CharactersProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(charactersReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${SW_BASE_URL}/people`);
        // console.log(data);
        dispatch({
          type: actions.UPDATE_CHARACTERS,
          payload: {
            characters: data.results
          }
        });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({
    ...state,
    loading,
  }), [state, loading]);

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
