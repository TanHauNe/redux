import { configureStore } from "@reduxjs/toolkit";
import users from "../features/counter/userSlice";

export const store = configureStore({
    reducer: {
        users,
    },
});
