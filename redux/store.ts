import { createStore, applyMiddleware, compose } from 'redux';
import { mockAccounts } from './mocks/mockAccounts';
import rootReducer from "./rootReducer";

const middleware: any = [
];
const initialState = {
  account: {
    ...mockAccounts
  }
};
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const Store = createStore(rootReducer, initialState, enhancers);

export default Store;