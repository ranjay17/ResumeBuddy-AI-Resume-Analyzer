import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        resumeText: null,
    },
    reducers: {
        addResumeText: (state, action) =>{
            state.resumeText = action.payload;
        }
    }
})

export const{addResumeText} = resumeSlice.actions;
export default resumeSlice.reducer;