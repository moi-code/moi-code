import { createStore, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import expireReducer from 'redux-persist-expire'

const initialState = {};

const middleware = [thunk];

const secretkey = process.env.SECRET_KEY;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthReducer"],
  //This will ensure any "new" keys added to the redux initial state
  //will not be overwritten by the persisted stuff found in storage
  stateReconciler: autoMergeLevel2,
  transforms: [
    // Create a transformer by passing the reducer key and configuration. Values
    // shown below are the available configurations with default values
    expireReducer("AuthReducer", {
      // (Optional) Key to be used for the time relative to which store is to be expired
      persistedAtKey: "__persisted_at",
      // (Required) Seconds after which store will be expired
      expireSeconds: 1800,
      // (Optional) State to be used for resetting e.g. provide initial reducer state
      expiredState: {},
      // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
      // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
      autoExpire: true
    })
    // You can add more `expireReducer` calls here for different reducers
    // that you may want to expire
  ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initialState,

  composeWithDevTools(applyMiddleware(...middleware))
);
export function initializeStore() {
  return store;
}
