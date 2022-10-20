import { configureStore } from '@reduxjs/toolkit';
import task from './taskSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        task,
    }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()