export const initialState = {
  characters: [],
  filteredCharacters:[],
  searchTerm: '',
};

export const actions = {
  UPDATE_CHARACTERS: 'UPDATE_CHARACTERS',
  UPDATE_FILTERD_CHARACTERS: 'UPDATE_FILTERD_CHARACTERS',
  UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM',
};

const charactersReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_CHARACTERS:
      return {
        ...state,
        characters: payload.characters
      };

      case actions.UPDATE_SEARCH_TERM:
      return {
        ...state,
        ...payload
      };

      case actions.UPDATE_FILTERD_CHARACTERS:
      return {
        ...state,
        filteredCharacters: payload.filteredCharacters
      };

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default charactersReducer;
