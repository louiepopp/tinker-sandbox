import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/auth.slice';
import { authAPI } from '../api/auth.api';

export const store = configureStore({
  reducer: {
    authReducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch