import { createSlice } from "@reduxjs/toolkit";



export interface UserState {
    user: null|object;
    registerLoading: boolean;
    registerDone: boolean;
    registerError: any;
    loginLoading: boolean;
    loginDone: boolean;
    loginError: any;
    loadMyInfoLoading: boolean;
    loadMyInfoDone: boolean;
    loadMyInfoError: any;
    logoutLoading: boolean;
    logoutDone: boolean;
    logoutError: any;

};

const initialState:UserState = {
    user: null,
    registerLoading: false,
    registerDone: false,
    registerError: null,
    loginLoading: false,
    loginDone: false,
    loginError: null,
    logoutLoading: false,
    logoutDone: false,
    logoutError: null,
    loadMyInfoLoading: false,
    loadMyInfoDone: false,
    loadMyInfoError: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export default userSlice;