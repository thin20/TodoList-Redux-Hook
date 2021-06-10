import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        searchTasks: (state, action) => {
            console.log(action.payload);
            state = action.payload;
            return state;
        }
    }
});

const { reducer, actions } = search;
export const { searchTasks } = actions;
export default reducer;