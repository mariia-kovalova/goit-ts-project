import { createAsyncThunk } from '@reduxjs/toolkit';
import { todosApi } from 'api/todosApi';
import { ITodoItem, OnlyCompletedAndId } from 'types/TodoItem.interface';

export const getTodos = createAsyncThunk<ITodoItem[]>(
  'todos/getAll',
  async (_, { rejectWithValue }) => {
    try {
      return await todosApi.getTodos();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todo: ITodoItem, { rejectWithValue }) => {
    try {
      return await todosApi.addTodo(todo);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (todo: OnlyCompletedAndId, { rejectWithValue }) => {
    try {
      return await todosApi.updateTodo(todo);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id: string, { rejectWithValue }) => {
    try {
      return await todosApi.deleteTodo(id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
