import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "../componentes/slice/charactersSlice";


export const store = configureStore({
    reducer: {
        Characters: charactersSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

