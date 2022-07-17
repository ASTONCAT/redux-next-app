const redux = require("redux")
const { combineReducers, createStore } = redux
import amountReducer from "./requestedAmount"
import monthlyPaymentReducer from "./monthlyPayment"
import loaderReducer from "./spinnerLoader"

const rootReducer = combineReducers({
  amount: amountReducer,
  monthlyPayment: monthlyPaymentReducer,
  loader: loaderReducer
})
  
const store = createStore(rootReducer)
store.subscribe(() => {
  console.log(store.getState())
})
export default store