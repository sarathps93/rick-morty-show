import axios from 'axios';
import { types } from './reducers';
import logger from '../utils/logger';

export const baseAPI = 'https://rickandmortyapi.com/api/character/';

const fetchCharactersData = (url, updateState) => async (dispatch) => {
  const endpoint = !url ? baseAPI : url;
  try {
    const results = await axios.get(endpoint);
    dispatch({
      type: types.fetch_character_data,
      payload: results.data,
    });
    if (typeof updateState === 'function') updateState();
  } catch (error) {
    logger.error(error);
    if (error.response.status === 404) {
      dispatch({
        type: types.fetch_search_error,
      });
    } else {
      dispatch({
        type: types.fetch_network_down,
      });
    }
  }
};

export default fetchCharactersData;
