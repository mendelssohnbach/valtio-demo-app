import { proxy } from 'valtio';

export const state = proxy<{ todoList: string[] }>({
  todoList: [],
});

export const addItem = (item: string) => {
  if (!item) return;
  state.todoList.push(item);
};
