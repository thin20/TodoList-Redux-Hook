import { createSlice } from "@reduxjs/toolkit";

const itemEdit = createSlice({
    name: 'itemEdit',
    initialState: {
        id: null,
        name: '',
        status: true
    },
    reducers: {
        taskEdit: (state, action) => {
            state = { ...action.payload };
            return state;
        }
    }
});

const { reducer, actions } = itemEdit;
export const { taskEdit } = actions;
export default reducer;