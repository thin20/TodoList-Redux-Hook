import { createSlice } from "@reduxjs/toolkit";

const sort = createSlice({
    name: 'sort',
    initialState: {
        by: '',
        value: 1
    },
    reducers: {
        sortTasks: (state, action) => {
            console.log(action.payload);
            state = { ...action.payload };
            return state;
        }
    }
});

const { reducer, actions } = sort;
export const { sortTasks } = actions
export default reducer;