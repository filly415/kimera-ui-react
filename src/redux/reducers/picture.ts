import { createSlice } from '@reduxjs/toolkit';

const pictureSlice = createSlice({
  name: 'picture',
  initialState: {
    original: '',
  },
  reducers: {
    setOriginal: (state, action) => {
      state.original = action.payload;
    }
  }
})

export const { setOriginal } = pictureSlice.actions;
export default pictureSlice;

