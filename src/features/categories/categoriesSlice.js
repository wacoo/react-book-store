import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.length === 0) {
        return 'Under construction';
      }
      return state;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
