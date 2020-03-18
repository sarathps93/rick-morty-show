import axios from 'axios';
import { baseAPI } from 'config';
import { types } from './reducers';

const fetchCharactersData = () => async (dispatch) => {
  const results = await axios.get(baseAPI);
  dispatch({
    type: types.fetch_character_data,
    payload: results.data,
  });
};

export default {
  fetchCharactersData,
};
