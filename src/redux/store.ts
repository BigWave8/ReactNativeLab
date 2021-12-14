import { combineReducers, createStore } from 'redux'
import todosReducer from './reducers/todosReducer'
import listsReducer from './reducers/listsReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  lists: listsReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
