import { createSlice } from "@reduxjs/toolkit";

const geminiAiSlice = createSlice({
    name: 'geminiAi',
    initialState: {
        geminiData : [],
    },
    reducers: {
        addGeminiData : (state,action) =>{
            state.geminiData.push(action.payload);
        },
        clearGeminiData: (state) =>{
            state.geminiData = []
        }
    }
})

export const{addGeminiData, clearGeminiData} = geminiAiSlice.actions;
export default geminiAiSlice.reducer;