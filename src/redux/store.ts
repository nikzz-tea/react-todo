import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import task from './taskSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  task
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
  // middleware: (getDefaultMiddleware) => {
  //     getDefaultMiddleware({
  //         serializableCheck: {
  //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  //         }
  //     })
  // }
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
