import { configureStore } from '@reduxjs/toolkit';
import counterReduser from "./features/counterSlice"

export const store = configureStore({
    reducer:{  //ye store bana le , ab nanane hai slices
        //sleces = feture
        counter:counterReduser
          // 51 min
    }
})