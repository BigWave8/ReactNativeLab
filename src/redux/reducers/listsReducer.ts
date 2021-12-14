import { AnyAction } from "redux";

import colors from "../../constants/colors";

export interface List {
  id: number;
  name: string;
  taskCount: number;
  color: string;
}

export enum DefaultListName {
  Inbox = "Inbox",
}

const initialState: List[] = [
  {
    id: 0,
    name: DefaultListName.Inbox,
    taskCount: 1,
    color: colors.greyColor,
  },
  {
    id: 1,
    name: "Work",
    taskCount: 2,
    color: colors.greenColor,
  },
  {
    id: 2,
    name: "Shopping",
    taskCount: 3,
    color: colors.redColor,
  },
  {
    id: 3,
    name: "Family",
    taskCount: 1,
    color: colors.yellowColor,
  },
  {
    id: 4,
    name: "Personal",
    taskCount: 4,
    color: colors.purpleColor,
  },
];

export default function listsReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}
