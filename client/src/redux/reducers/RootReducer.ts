import axios from "axios";
import {AnyAction, CombinedState, combineReducers} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper";
import modalSlice, { ModalState } from "./modalSlice";
import userSlice, { UserState } from "./userSlice";

export interface RootStates{
    modal: ModalState;
    user: UserState;
};

axios.defaults.baseURL = "http://localhost:4000/api"
axios.defaults.withCredentials = true;

const rootReducer = (state:RootStates, action:AnyAction):CombinedState<RootStates>=>{
    switch(action.type){
        case HYDRATE:
            return action.payload;
        default:{
            const combineReducer = combineReducers({
                modal: modalSlice.reducer,
                user: userSlice.reducer,
            });
            return combineReducer(state, action)
        }
    }
};

export default rootReducer;

