import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState:{userName:string} = {
    userName :'Kamil'
}

export const ExampleSlice = createSlice({
    name:'example',
    initialState,
    reducers: {
        getName : (state) => {
            state.userName += ' Memmedov' ;
        },

    }
})

export const {getName} = ExampleSlice.actions

export const selectName = (state:RootState) => state.example.userName

export default ExampleSlice.reducer
