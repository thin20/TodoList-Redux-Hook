import { createSlice } from "@reduxjs/toolkit";

const sort = createSlice({
    name: 'sort',
    initialState: {
        by: '',
        value: 1
    },
    reducers: {
        sortTasks: (state, action) => {
            state = { ...action.payload };
        }
    }
});

const { reducer, actions } = sort;
export const { sortTasks } = actions
export default reducer;