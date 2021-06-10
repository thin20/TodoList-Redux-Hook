import { createSlice } from "@reduxjs/toolkit";

const filterTable = createSlice({
    name: 'filterTable',
    initialState: {
        name: '',
        value: -1
    },
    reducers: {
        filterTableWorks: (state, action) => {
            state = { ...action.payload };
        }
    }
});

const { reducer, actions } = filterTable;
export const { filterTableWorks } = actions;
export default reducer;