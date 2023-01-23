import { configureStore } from "@reduxjs/toolkit";
import PropertieReducer from "./PropertieSlice";
export default configureStore({
  reducer: {
    Properties: PropertieReducer,
  },
});
