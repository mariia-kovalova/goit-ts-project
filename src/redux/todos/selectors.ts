import { RootState } from 'redux/store';

export const selectTodosItems = (state: RootState) => state.todos.items;
export const selectTodosIsLoading = (state: RootState) => state.todos.isLoading;
export const selectTodosError = (state: RootState) => state.todos.error;
