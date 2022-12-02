import {createSlice} from "@reduxjs/toolkit";

export interface ModalState {
    menuModal: boolean;
};

const initialState:ModalState = {
    menuModal: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openMenu: (state) => {
            state.menuModal = true;

        },
        closeMenu: (state) => {
            state.menuModal = false;
        }
    }
});

export const {openMenu, closeMenu} = modalSlice.actions;

export default modalSlice;