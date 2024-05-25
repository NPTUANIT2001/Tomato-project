import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
// import { loadingBarReducer } from "react-redux-loading-bar";

const authPersistConfig = { key: "auth", storage };

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),

  // loadingBar: loadingBarReducer,
});

const syncConfig = {
  blacklist: ["persist/PERSIST"],
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    createStateSyncMiddleware(syncConfig),
    thunk,
  ],
});

initMessageListener(store);

export default store;
export const persistor = persistStore(store);
