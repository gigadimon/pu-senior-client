import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import { agentReducer } from './agentSlice';
import { userReducer } from './userSlice';
import { webimReducer } from './webimSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage
};

const persistedAgentReducer = persistReducer(persistConfig, agentReducer);

export const store = configureStore({
  reducer: {
    agent: persistedAgentReducer,
    user: userReducer,
    webimState: webimReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
