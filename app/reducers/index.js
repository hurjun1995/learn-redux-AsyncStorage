import { combineReducers } from 'redux';

import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;