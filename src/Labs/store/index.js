import { configureStore } from '@reduxjs/toolkit';
import helloReducer from '../assignment4/ReduxExamples/HelloRedux/helloReducer';
import counterReducer from '../assignment4/ReduxExamples/CounterRedux/counterReducer';
import addReducer from '../assignment4/ReduxExamples/AddRedux/addReducer';
import todosReducer from '../assignment4/ReduxExamples/todos/todosReducer';
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;
