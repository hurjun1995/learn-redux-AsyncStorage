import { DATA_AVAILABLE } from './types';

// Import the sample data
import Data from '../instructions.json';

export function getData() {
    return (dispatch) => {

        // Make API Call
        // For this example, use the sample data in the json file
        // to delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data: data});
        }, 2000);
    };
};