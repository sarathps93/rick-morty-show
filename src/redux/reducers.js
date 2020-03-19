export const types = {
  fetch_character_data: 'types/fetch_character_data',
  fetch_search_error: 'types/fetch_search_error',
  fetch_network_down: 'types/fetch_network_down',
};

const initialState = {
  info: {},
  results: [],
  networkError: false,
  userSearchError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.fetch_character_data: {
      return { ...initialState, ...action.payload };
    }
    case types.fetch_search_error: {
      return { ...state, userSearchError: true, networkError: false };
    }
    case types.fetch_network_down: {
      return { ...state, userSearchError: false, networkError: true };
    }
    default: return state;
  }
};
