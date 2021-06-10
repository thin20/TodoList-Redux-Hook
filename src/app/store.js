import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from '../slices/tasksSlice';
import itemEditReducer from '../slices/itemEditSlice';
import filterTableReducer from '../slices/filterTableSlice';
import isDisplayFormReducer from '../slices/isDisplayFormSlice';
import searchReducer from '../slices/searchSlice';
import sortReducer from '../slices/sortSlice'

const rootReducer = {
    tasks: tasksReducer,
    itemEdit: itemEditReducer,
    filterTable: filterTableReducer,
    isDisplayForm: isDisplayFormReducer,
    search: searchReducer,
    sort: sortReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;