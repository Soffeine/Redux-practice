import {ADD_TASK} from "./action-types";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload);
        default:
            return state;
    }
};
