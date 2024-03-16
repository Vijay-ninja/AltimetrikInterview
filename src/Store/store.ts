import { configureStore } from "@reduxjs/toolkit";
import { carNameSlice } from "./companyNameSlice";

export const store = configureStore({
    reducer:{names:carNameSlice.reducer}
});

export type RootState = ReturnType<typeof store.getState>