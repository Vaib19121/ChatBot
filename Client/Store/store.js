import { combineReducers, createStore} from 'redux';
import Config_Reducer from './Reducers/Config_Reducer';
 
const rootReducer = combineReducers({
  config: Config_Reducer,
});
 
export default createStore(rootReducer);