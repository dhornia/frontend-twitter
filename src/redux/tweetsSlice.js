import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    toggleLike(state, action) {},
  },
});

const { actions, reducer } = tweetsSlice;
export const { toggleLike } = actions;
export default reducer;
