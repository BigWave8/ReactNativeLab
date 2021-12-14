export const completeTodo = (todoId: number, isCompleted: boolean) => ({
  type: "TOGGLE_TODO",
  todoId,
  isCompleted,
});

export type ACTIONTYPE = {
  type: "TOGGLE_TODO";
  todoId: number;
  isCompleted: boolean;
};
