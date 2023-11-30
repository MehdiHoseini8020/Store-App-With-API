import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./createslice";

export const storee = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
export type RoutState = ReturnType<typeof storee.getState>;
export default storee;
