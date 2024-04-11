import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = {
  offerInfo: {},
};

const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    addOfferInfo(state, action) {
      state.offerInfo = { ...state.offerInfo, ...action.payload };
    },
    initOfferInfo(state, action) {
      state.offerInfo = initialState.offerInfo;
    },
  },
});

export const { addOfferInfo, initOfferInfo } = offerSlice.actions;
export default offerSlice.reducer;
