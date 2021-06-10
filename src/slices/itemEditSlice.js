import { createSlice } from "@reduxjs/toolkit";

const itemEdit = createSlice({
    name: 'itemEdit',
    initialState: {
        id: null,
        name: '',
        status: true
    },
    reducers: {
        editTaskItem: (state, action) => {
            state = { ...action.payload };
        }
    }
});

const { reducer, actions } = itemEdit;
export const { editTaskItem } = actions;
export default reducer;