import { configureStore } from "@reduxjs/toolkit";
import  pasteReducer  from "./slice/pasteSlice";    //default export kisi bhi naam se export krlo 

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
