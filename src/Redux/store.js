import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./homeSlice.js";

export default configureStore({
  reducer: {
    repodata: repoReducer,
  },
});
