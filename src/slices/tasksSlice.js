const { createSlice } = require("@reduxjs/toolkit");

const tasks = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        listAll: (state, action) => {
            return state;
        },
        addWork: (state, action) => {
            state.push(action.payload);
        },
        updateWork: (state, action) => {
            let id = action.payload.id;
            let index = state.findIndex(work => work.id === id);
            state[index] = { ...action.payload };
        },
        removeWork: (state, action) => {
            let id = action.payload;
            state = state.filter(work => work.id !== id);
            return state;
        }
    },
})

const { reducer, action } = tasks;
export default reducer;