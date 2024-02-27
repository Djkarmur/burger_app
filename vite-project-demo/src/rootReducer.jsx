import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';

 const rootReducer = combineReducers({
    usersOrder: OrderReducer
 })

 export default rootReducer