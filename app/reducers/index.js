import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
    homeReducer,
    quoteReducer,
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;