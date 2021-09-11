import { combineReducers } from 'redux';

import home from './home';
import search from './search';
import profile from './profile';

export default combineReducers({
  home,
  search,
  profile,
});
