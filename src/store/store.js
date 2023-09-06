import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import searchSlice from "./slices/searchSlice";
import trainSlice from "./slices/trainSlice";
import orderSlice from "./slices/orderSlice";
import sortSlice from "./slices/sortSlice";
import sidebarSelectSlice from "./slices/sidebarSelectSlice";
import trainsSlice from "./slices/trainsSlice";
import seatsSlice from "./slices/seatsSlice";
import lastTicketsSlice from "./slices/lastTicketsSlice";

import passengersSlice from "./slices/passengersSlice";



const persistConfig ={
  key: 'storage',
  storage,
  blacklist: ['orderConfirmation', 'lastTickets'],
};

const searchPersistConfig = {
  key:'search',
  storage,
};

const sidebarSelectPersistConfig = {
  key: 'sidebarSelect',
  storage,
};

const trainsPersistConfig = {
  key:'trains',
  storage,
  blacklist: ['loading','error'],
}

const sortPersistConfig = {
  key:'sort',
  storage,
};

const trainPersistConfig = {
  key:'train',
  storage,
};

const seatsPersistConfig = {
  key:'seats',
  storage,
  blacklist: ['loading','error'],
};



const passengersPersistConfig = {
  key: 'passengers',
  storage,
};



const orderConfig = {
  key:'order',
  storage
};

const reducer = combineReducers({
  search: persistReducer(searchPersistConfig, searchSlice.reducer),
  sidebarSelect: persistReducer(sidebarSelectPersistConfig, sidebarSelectSlice.reducer),
  trains: persistReducer(trainsPersistConfig, trainsSlice.reducer),
  sort: persistReducer(sortPersistConfig, sortSlice.reducer),
  train: persistReducer(trainPersistConfig, trainSlice.reducer),
  seats: persistReducer(seatsPersistConfig,seatsSlice.reducer),

  passengers: persistReducer(passengersPersistConfig, passengersSlice.reducer),

  order: persistReducer(orderConfig, orderSlice.reducer),

  lastTickets: lastTicketsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,REGISTER]
      },
    }),
});

export const persistor = persistStore(store);
export default store;




