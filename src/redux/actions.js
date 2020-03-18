import axios from 'axios';
import { baseAPI } from 'config';
import { types } from './reducers';

export const fetchCharactersData = () => async (dispatch, getState) => {
  const results = await axios.get(baseAPI);
  dispatch({
    type: types.fetch_character_data,
    payload: results.data,
  });
};
