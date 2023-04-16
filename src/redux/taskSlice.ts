import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TTask = {
  id: number;
  title: string;
  isDone: boolean;
};

const testOne: TTask = {
  id: 0,
  title: 'Add some animations',
  isDone: true,
};

interface ITasks {
  items: TTask[];
  filtered: boolean;
}

const initialState: ITasks = {
  items: [testOne],
  filtered: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TTask>) {
      state.items.push(action.payload);
    },
    toggleDone(state, action: PayloadAction<number>) {
      const itemFind = state.items.find((obj) => obj.id === action.payload);
      if (itemFind) {
        itemFind.isDone = !itemFind.isDone;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    filterItems(state, action: PayloadAction<boolean>) {
      state.filtered = action.payload;
    },
  },
});

export const { addItem, toggleDone, removeItem, filterItems } = taskSlice.actions;
export default taskSlice.reducer;
