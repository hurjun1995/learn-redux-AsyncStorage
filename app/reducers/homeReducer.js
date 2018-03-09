import { DATA_AVAILABLE } from "../actions/types" // Import the actions types constant we defined in our actions

let initialState = { data: [], loading: true};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading: false});
            return state;
        default:
            return state;
    };
}

export default homeReducer;