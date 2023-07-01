import { createStore , applyMiddleware , combineReducers} from "redux";
import productReducer from './reducers/productReducer';
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    products : productReducer,
    cart : cartReducer
});

const store = createStore(rootReducer , applyMiddleware(thunk));

export default store;