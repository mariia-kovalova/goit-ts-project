import { SerializedError, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ITodoItem } from 'types/TodoItem.interface';
import { addTodo, deleteTodo, getTodos, updateTodo } from './operations';

interface ITodosState {
  items: ITodoItem[];
  isLoading: boolean;
  error: null | SerializedError;
}

const initialState: ITodosState = {
  items: [],
  isLoading: false,
  error: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getTodos.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(updateTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.map(item =>
          item.id === payload.id ? payload : item
        );
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })
      .addMatcher(
        isAnyOf(
          getTodos.pending,
          addTodo.pending,
          updateTodo.pending,
          deleteTodo.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getTodos.fulfilled,
          addTodo.fulfilled,
          updateTodo.fulfilled,
          deleteTodo.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getTodos.rejected,
          addTodo.rejected,
          updateTodo.rejected,
          deleteTodo.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          if (payload) state.error = payload;
        }
      ),
});

export const todosReducer = todosSlice.reducer;
