import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweets(state, action) {
      const { tweets } = action.payload;
      state = structuredClone(tweets);
      return state;
    },
    toggleLike(state, action) {
      const { userId, tweetId } = action.payload;
      const selectedTweet = state.find((tweet) => tweet._id.toString() === tweetId);

      selectedTweet.likes = selectedTweet.likes.some((uId) => uId.toString() === userId)
        ? selectedTweet.likes.filter((uId) => uId.toString() !== userId)
        : [...selectedTweet.likes, userId];
    },
  },
});

const { actions, reducer } = tweetsSlice;
export const { setTweets, toggleLike } = actions;
export default reducer;
