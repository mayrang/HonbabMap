import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



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

export const asyncUserRegister = createAsyncThunk(
    'user/asyncUserRegister',
    async (data:object, {rejectWithValue}) => {
        try{
            const result = await axios.post("/auth/create", data);
            return result.data;
        }catch(err:any){
            console.log(err);
            return rejectWithValue(err.response?.data?.error || "회원가입 에러");
        }
    }
);

export const asyncUserLogin = createAsyncThunk(
    'user/asyncUserLogin',
    async (data:object, {rejectWithValue}) => {
        try{
            const result = await axios.post("/auth/login", data);
            return result.data;

        }catch(err:any){
            console.log(err);
            return rejectWithValue(err.response?.data?.error || "로그인 에러");
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(asyncUserRegister.pending, (state) => {
            state.registerLoading = true;
            state.registerDone = false;
            state.registerError = null;
        });
        builder.addCase(asyncUserRegister.fulfilled, (state) => {
            state.registerLoading = false;
            state.registerDone = true;
            state.registerError = null;
        });
        builder.addCase(asyncUserRegister.rejected, (state, action) => {
            state.registerLoading = false;
            state.registerDone = false;
            state.registerError = action.payload;
        });
        builder.addCase(asyncUserLogin.pending, (state) => {
            state.loginLoading = true;
            state.loginDone = false;
            state.loginError = null;
        });
        builder.addCase(asyncUserLogin.fulfilled, (state) => {
            state.loginLoading = false;
            state.loginDone = true;
            state.loginError = null;
        });
        builder.addCase(asyncUserLogin.rejected, (state, action) => {
            state.loginLoading = false;
            state.loginDone = false;
            state.loginError = action.payload;
        });
    }
});

export default userSlice;