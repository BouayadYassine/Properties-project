import { createSlice } from "@reduxjs/toolkit";
import data from "../PropertySection/data";
export const PropertieSlice = createSlice({
  name: "Propertie",
  initialState: { value: [] },
  reducers: {
    addPropertie: (state, action) => {
      state.value.push(action.payload);
    },

    deletePropertie: (state, action) => {
      state.value = state.value.filter(
        (propertie) => propertie.id !== action.payload.id
      );
    },
  },
});
export const { addPropertie, deletePropertie } = PropertieSlice.actions;
export default PropertieSlice.reducer;
