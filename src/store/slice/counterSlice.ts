import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  value: number;
};

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    subtract: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  selectors: {
    selectCount: (state) => state.value,
  },
});

export const { increment, decrement, add, subtract } = counterSlice.actions;
export const { selectCount } = counterSlice.selectors;
export default counterSlice.reducer;
