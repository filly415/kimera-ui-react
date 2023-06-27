import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './reducers/theme';
import pictureSlice from './reducers/picture';


const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    picture: pictureSlice.reducer
  }
});

export type rootType = ReturnType<typeof store.getState>
export default store;