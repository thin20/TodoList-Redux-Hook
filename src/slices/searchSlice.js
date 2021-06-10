import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        searchTasks: (state, action) => {
            state = action.payload;
        }
    }
});

const { reducer, actions } = search;
export const { searchTask } = actions;
export default reducer;