import { configureStore } from "@reduxjs/toolkit";
import detailSliceReducer from "../sliceState/detailCardSlice";
// ...

export const store = configureStore({
  reducer: {
    detailCard: detailSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
