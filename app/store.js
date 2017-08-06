import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import apiTodoList from './api-todolist';

const middleware = applyMiddleware(thunk.withExtraArgument({apiTodoList}));

const store = createStore(
  reducers,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
