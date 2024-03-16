import { createSlice } from "@reduxjs/toolkit";

export const carNameSlice = createSlice({
    name: "carNames",
    initialState: {
        cars: undefined,
    },
    reducers: {
        addCarNames: (state: any, action: any) => {
            state.cars = action.payload;
        }
    }
})

export const carNameSliceAction = carNameSlice.actions;




