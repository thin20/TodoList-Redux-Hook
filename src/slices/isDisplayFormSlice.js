import { createSlice } from "@reduxjs/toolkit";

const isDisplayForm = createSlice({
    name: 'isOpenForm',
    initialState: false,
    reducers: {
        toggleForm: (state, action) => {
            state = !state;
        },
        openForm: (state, action) => {
            state = true;
        },
        closeForm: (state, action) => {
            state = false;
        }
    }
});

const { reducer, actions } = isDisplayForm;
export const { toggleForm, openForm, closeForm } = actions;
export default reducer;