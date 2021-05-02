import { combineReducers } from 'redux'

import productReducer from './productReducer'
import historyReducer from './historyReducer'
import transactionReducer from './transactionReducer'

export default combineReducers({
  productReducer,
  historyReducer,
  transactionReducer
})