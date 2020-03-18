import axios from 'axios';
import { types } from './reducers';

export const baseAPI = 'https://rickandmortyapi.com/api/character/';

const fetchCharactersData = (url, updateState) => async (dispatch) => {
  const endpoint = !url ? baseAPI : url;
  const results = await axios.get(endpoint);
  dispatch({
    type: types.fetch_character_data,
    payload: results.data,
  });
  if (typeof updateState === 'function') updateState();
};

export default fetchCharactersData;
