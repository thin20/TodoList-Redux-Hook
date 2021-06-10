const { createSlice } = require("@reduxjs/toolkit");

const tasks = createSlice({
    name: 'tasks',
    initialState: JSON.parse(localStorage.getItem('tasks')) || [],
    reducers: {
        listAll: (state, action) => {
            return state;
        },
        addTask: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        updateTask: (state, action) => {
            let id = action.payload.id;
            let index = state.findIndex(task => task.id === id);
            state[index] = { ...action.payload };
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        removeTask: (state, action) => {
            let id = action.payload;
            state = state.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(state));
            return state;
        },
        updateStatusTask: (state, action) => {
            let id = action.payload;
            let index = state.findIndex(task => task.id === id);
            state[index] = { ...state[index], status: !state[index].status };
            localStorage.setItem('tasks', JSON.stringify(state));
        }
    },
})

const { reducer, actions } = tasks;
export const { listAll, addTask, updateTask, removeTask, updateStatusTask } = actions;
export default reducer;