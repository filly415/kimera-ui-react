import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../data/dataSourse';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themes,
    currentTheme: themes[0]
  },
  reducers: {
    selectTheme: (state, action) => {
      state.currentTheme = action.payload;
    }
  }
})

export const { selectTheme } = themeSlice.actions;
export default themeSlice;

