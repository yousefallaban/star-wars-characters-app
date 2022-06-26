export const initialState = {
  characters: [],
};

export const actions = {
  UPDATE_CHARACTERS: 'UPDATE_CHARACTERS',
};

const charactersReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_CHARACTERS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default charactersReducer;
