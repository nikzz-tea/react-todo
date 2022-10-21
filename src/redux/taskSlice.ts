import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TTask = {
  id: number;
  title: string;
  isDone: boolean;
};

const testOne: TTask = {
  id: 0,
  title: 'Make it save in localStorage',
  isDone: true
};

interface ITasks {
  items: TTask[];
}

const initialState: ITasks = {
  items: [testOne]
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TTask>) {
      state.items.push(action.payload);
    },
    doneUndone(state, action: PayloadAction<number>) {
      const itemFind = state.items.find((obj) => obj.id === action.payload);
      if (itemFind) {
        itemFind.isDone = !itemFind.isDone;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    }
  }
});

export const { addItem, doneUndone, removeItem } = taskSlice.actions;
export default taskSlice.reducer;
