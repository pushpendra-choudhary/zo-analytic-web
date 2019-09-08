import {combineReducers} from 'redux';
import auth from './AuthReducer';
import analytic from './AnalyticReducer';

const reducers = combineReducers({
  auth,
  analytic,
});

export default reducers;
