import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/CounterSlice';
import todoReducer from './Slices/TodoSlicer';



export const store = configureStore({
	reducer: {
		counter: counterReducer,
        todos : todoReducer,

	},
});