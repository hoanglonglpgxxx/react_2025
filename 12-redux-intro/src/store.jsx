import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

//dùng redux cũ
/* const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
}); */
// const store = createStore(rootReducer, applyMiddleware(thunk));

//dùng redux toolkit
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
  devTools: true,
});

export default store;
