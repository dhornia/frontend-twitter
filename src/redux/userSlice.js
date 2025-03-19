import { createSlice } from "@reduxjs/toolkit";

const loggedUser = {
  userId: "67d9bc39570171f2e052adad",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2Q5YmI2OTVlOTJjMTUwZmJjYWU5M2QiLCJpYXQiOjE3NDIzODkyMjF9.h6vrW3LGRwPfdlH749_0v3dPgy1xDTYMwhrW5ubEQYo",
};

const userSlice = createSlice({
  name: "user",
  initialState: loggedUser,
  reducers: {
    setUser(state, action) {},
    removeUser(state, action) {},
  },
});

const { actions, reducer } = userSlice;
export const { setUser, removeUser } = actions;
export default reducer;
