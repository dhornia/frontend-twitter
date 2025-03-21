import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser(state, action) {
      state = action.payload;
      return state;
    },
    removeUser(state, action) {
      state = {};
      return state;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUser, removeUser } = actions;
export default reducer;
