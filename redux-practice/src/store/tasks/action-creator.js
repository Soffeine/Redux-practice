import {ADD_TASK} from "./action-types";

export default {
    addTask: (task) => ({
        type: ADD_TASK,
        payload: task,
    }),
};
