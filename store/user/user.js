import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = {
  bizUserYn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBizUserYn(state, action) {
      state.bizUserYn = action.payload;
    },
  },
});

export const { setBizUserYn } = userSlice.actions;
export default userSlice.reducer;
