import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import filters from "./filters/reducer";
// import notifications from "./notifications/reducer";

import companies from "./companies/reducer";
import jobs from "./jobs/reducer";
import jobTypes from "./jobTypes/reducer";
// import jobTags from "./jobTags/reducer";

const persistConfig = {
  key: "javnikonkursi.hasanjoldic.com",
  version: 1,
  whitelist: ["version", "filters"],
  storage,
};

const reducer = combineReducers({
  filters,
  // notifications,

  companies,
  jobs,
  jobTypes,
  // jobTags,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

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
export * from "./companies";
export * from "./filters";
export * from "./jobs";
export * from "./jobTypes";
// export * from "./jobTags";
// export * from "./notifications";
