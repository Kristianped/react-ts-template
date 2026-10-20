import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '@/store/slice/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// infer the type of store
export type AppStore = typeof store;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;
