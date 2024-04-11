import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchObject : {
  },
  organizationList : []
}

const organizationSlice = createSlice({
  name : 'organizationList',
    initialState,
  reducers: {
    setSearchObject(state, action){
      state.searchObject = action.payload;
    },
    setOrganizationList(state, action){
      state.organizationList = action.payload;
    }
  }
});

export const { setSearchObject, setOrganizationList } = organizationSlice.actions;
export default organizationSlice.reducer;
