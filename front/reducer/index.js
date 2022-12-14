import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, combineReducers } from "redux";
import post from "./post";

const rootReducer = (state, action) => {
    switch(action.type){
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                post,
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;