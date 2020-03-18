export const types = {
  fetch_character_data: 'types/fetch_character_data',
};

const initialState = {
  info: {},
  results: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.fetch_character_data: {
      return action.payload;
    }
    default: return state;
  }
};
