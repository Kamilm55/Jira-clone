import { configureStore } from "@reduxjs/toolkit";
import ExampleSlice from "../features/ExampleSlice";

const store = configureStore({
    reducer:{
        example:ExampleSlice,

    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store ;