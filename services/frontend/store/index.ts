import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// import app from "./app/reducer";
import filters from "./filters/reducer";
// import notifications from "./notifications/reducer";

import companies from "./companies/reducer";
import jobs from "./jobs/reducer";
import jobTypes from "./jobTypes/reducer";
// import jobTags from "./jobTags/reducer";

export const store = configureStore({
  reducer: {
    // app,
    filters,
    // notifications,

    companies,
    jobs,
    jobTypes,
    // jobTags,
  },
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// TODO remove this
export type IApplicationState = any;
// TODO remove this
export type getStateFuncType = () => IApplicationState;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// TODO
// export * from "./app";
export * from "./companies";
export * from "./filters";
export * from "./jobs";
export * from "./jobTypes";
// export * from "./jobTags";
// export * from "./notifications";
