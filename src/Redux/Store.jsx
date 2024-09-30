import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';
import { adminReducer } from './adminSlice';
import { cartReducer } from './cartslice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const adminPersistConfig = {
  key: 'admin',
  storage,
};



const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    admin: persistedAdminReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
