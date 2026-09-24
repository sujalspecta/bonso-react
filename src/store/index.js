import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";
import { cartListener } from "./listeners/cartListener";
import { wishlistListener } from "./listeners/wishlistListener";

// Create a native wrapper that satisfies the redux-persist contract safely
const customLocalStorage = {
  getItem: (key) => {
    if (typeof window !== "undefined") {
      return Promise.resolve(window.localStorage.getItem(key));
    }
    return Promise.resolve(null);
  },
  setItem: (key, value) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
    return Promise.resolve();
  },
  removeItem: (key) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  storage: customLocalStorage, // Uses your native, bundler-safe storage engine
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .prepend(cartListener.middleware)      
      .prepend(wishlistListener.middleware),
});

export const persistor = persistStore(store);
