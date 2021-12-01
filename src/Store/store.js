import { createStore } from 'redux';
import noteReducer from "../reducers/noteReducers.js";






const store = createStore(noteReducer);

export default store;