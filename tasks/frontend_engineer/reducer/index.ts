import { combineReducers } from "@reduxjs/toolkit";
import { alertSlice } from "./alertReducer";

const rootReducer = combineReducers({
    alertState: alertSlice.reducer
})
export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;