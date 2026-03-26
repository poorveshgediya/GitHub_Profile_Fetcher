import { createSlice } from "@reduxjs/toolkit";

export const repoDataSlice = createSlice({
  name: "repodata",
  initialState: {
    profiledata: {},
    repositorydata: [],
  },
  reducers: {
    saveRepoData: (state, action) => {
      state.repositorydata = action.payload;
    },
    saveProfileData: (state, action) => {
      state.profiledata = action.payload;
    },
  },
});

export const { saveRepoData, saveProfileData } = repoDataSlice.actions;

export default repoDataSlice.reducer;
