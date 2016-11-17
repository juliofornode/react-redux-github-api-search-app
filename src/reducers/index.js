import { combineReducers } from 'redux';
import reducerFetchData from './reducer_fetch_data';

const rootReducer = combineReducers({
  reducerFetchData: reducerFetchData
});

export default rootReducer;
