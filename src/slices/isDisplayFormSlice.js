import { createSlice } from "@reduxjs/toolkit";

const isDisplayForm = createSlice({
    name: 'isOpenForm',
    initialState: false,
    reducers: {
        toggleForm: (state, action) => {
            state = !state;
            return state;
        },
        openForm: (state, action) => {
            state = true;
            return state;
        },
        closeForm: (state, action) => {
            state = false;
            return state;
        }
    }
});

const { reducer, actions } = isDisplayForm;
export const { toggleForm, openForm, closeForm } = actions;
export default reducer;