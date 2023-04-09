import axios from 'axios';
import { ITodoItem, OnlyCompletedAndId } from 'types/TodoItem.interface';

axios.defaults.baseURL = 'https://641850a829e7e36438e52bc1.mockapi.io';

export const todosApi = {
  getTodos: async () => {
    const { data } = await axios.get('/todos');
    return data;
  },
  addTodo: async (todo: ITodoItem) => {
    const { data } = await axios.post('/todos', {
      ...todo,
    });
    return data;
  },
  updateTodo: async (todo: OnlyCompletedAndId) => {
    const { data } = await axios.put(`/todos/${todo.id}`, {
      ...todo,
    });
    return data;
  },
  deleteTodo: async (id: string) => {
    const { data } = await axios.delete(`/todos/${id}`);
    return data;
  },
};
