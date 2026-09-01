import { createSlice } from "@reduxjs/toolkit";

// initialState ek object hai to
// uski key ka naam pastes hai, jaise pehle key ka naam value tha

const pasteSlice = createSlice({
  name: "paste",
  initialState: {
    pastes: localStorage.getItem("pastes")
      ? JSON.parse(localStorage.getItem("pastes"))
      : [],
  },
  reducers: {
    addToPastes: (state, action) => {
      // console.log(current(state));
      state.pastes.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    updateToPastes: (state, action) => {
      const index = state.pastes.findIndex((p) => p.id === action.payload.id);
      if (index >= 0) {
        state.pastes[index] = action.payload;
      }
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    delFromPastes: (state, action) => {
      state.pastes = state.pastes.filter((elem) => elem.id !== action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    clearAllPastes: (state) => {
      state.pastes = [];
      localStorage.setItem("pastes", JSON.stringify([]));
    },
  },
});

export const { addToPastes, delFromPastes, updateToPastes, clearAllPastes } =
  pasteSlice.actions;
export default pasteSlice.reducer;
