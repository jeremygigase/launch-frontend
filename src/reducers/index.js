// NPM's
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import Cookies from "js-cookie";

// Reducers
import userReducer from "./user";
import taskReducer from "./task";
import scoreReducer from "./score";
import friendReducer from "../actions/friend";

const persistConfig = {
  key: "root",
  whitelist: ["user" , "task", "score", "friend"],
  storage
};

const appReducer = persistCombineReducers(persistConfig, {
  user: userReducer,
  task: taskReducer,
  score: scoreReducer,
  friend: friendReducer

});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    window.localStorage.clear();
    localStorage.clear();
    Cookies.remove("jwt");
  }
  return appReducer(state, action);
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

export default store;