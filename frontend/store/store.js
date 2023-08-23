import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import Storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "isom",
  Storage,
};

const persistCartReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
  reducer: {
    persistCartReducer,
  },
});
export default store;
export const persistor = persistStore(store);
