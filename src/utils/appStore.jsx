import {configureStore} from "@reduxjs/toolkit";
import resumeReducer from './resumeSlice';
import geminiDataReducer from './geminiAiSlice';

const appStore = configureStore({
    reducer: {
        resume: resumeReducer,
        geminiData: geminiDataReducer,
    }
})

export default appStore;