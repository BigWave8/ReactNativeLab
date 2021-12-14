import { ACTIONTYPE } from "../actions/todosActions";
import moment from "moment";

export interface Todo {
  id: number;
  todoText: string;
  isCompleted: boolean;
  dayTimeStamp: moment.Moment | null;
  hourTimeStamp: moment.Moment | null;
  categoryId: number;
}

const initialState: Todo[] = [
  {
    id: 0,
    todoText: "Start making a presentation",
    isCompleted: false,
    dayTimeStamp: moment(),
    hourTimeStamp: null,
    categoryId: 1,
  },
  {
    id: 1,
    todoText: "Pay for rent",
    isCompleted: true,
    dayTimeStamp: moment(),
    hourTimeStamp: moment().set({ hour: 19, minute: 0 }),
    categoryId: 4,
  },
  {
    id: 2,
    todoText: "Buy a milk",
    isCompleted: false,
    dayTimeStamp: moment(),
    hourTimeStamp: null,
    categoryId: 2,
  },
  {
    id: 3,
    todoText: "Don't forget to pick up Mickael from school",
    isCompleted: false,
    dayTimeStamp: moment(),
    hourTimeStamp: null,
    categoryId: 0,
  },
  {
    id: 4,
    todoText: "Buy a chocolate for Charlotte",
    isCompleted: false,
    dayTimeStamp: moment(),
    hourTimeStamp: null,
    categoryId: 2,
  },
  {
    id: 5,
    todoText: "Call John",
    isCompleted: false,
    dayTimeStamp: null,
    hourTimeStamp: null,
    categoryId: 1,
  },
  {
    id: 6,
    todoText: "Grapes",
    isCompleted: false,
    dayTimeStamp: moment().set({ date: moment().date() + 1 }),
    hourTimeStamp: null,
    categoryId: 2,
  },
  {
    id: 7,
    todoText: "Greet niece",
    isCompleted: false,
    dayTimeStamp: null,
    hourTimeStamp: null,
    categoryId: 3,
  },
  {
    id: 8,
    todoText: "Cut one's hair",
    isCompleted: false,
    dayTimeStamp: moment().set({ date: moment().date() + 21 }),
    hourTimeStamp: null,
    categoryId: 4,
  },
  {
    id: 9,
    todoText: "Continue learning French",
    isCompleted: false,
    dayTimeStamp: null,
    hourTimeStamp: null,
    categoryId: 4,
  },
  {
    id: 10,
    todoText: "Charge AirPods",
    isCompleted: false,
    dayTimeStamp: null,
    hourTimeStamp: null,
    categoryId: 4,
  },
];

export default function todosReducer(state = initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.todoId) {
          return { ...todo, isCompleted: !action.isCompleted };
        }
        return todo;
      });
    default:
      return state;
  }
}
