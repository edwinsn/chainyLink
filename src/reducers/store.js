import { createStore } from 'redux'
import Reducer from './features/links'

const store = createStore(
    Reducer,
);

export default store