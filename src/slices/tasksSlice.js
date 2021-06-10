const { createSlice } = require("@reduxjs/toolkit");

const tasks = createSlice({
    name: 'tasks',
    initialState: [
        { id: 1, name: 'An sang', status: true },
        { id: 2, name: 'Hoc', status: false },
        { id: 3, name: 'An trua', status: true },
        { id: 4, name: 'An toi', status: false }
    ],
    reducers: {
        listAll: (state, action) => {
            return state;
        },
        addTask: (state, action) => {
            state.push(action.payload);
        },
        updateTask: (state, action) => {
            let id = action.payload.id;
            let index = state.findIndex(task => task.id === id);
            state[index] = { ...action.payload };
        },
        removeTask: (state, action) => {
            let id = action.payload;
            state = state.filter(task => task.id !== id);
            return state;
        }
    },
})

const { reducer, actions } = tasks;
export const { listAll, addTask, updateTask, removeTask } = actions;
export default reducer;