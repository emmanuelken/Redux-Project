import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.description = description;
        task.isDone = isDone;
      }
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
  },
});

export const { addTask, editTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
