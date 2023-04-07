import { FC, useState } from 'react';
import { TodoList } from './TodoList';
import { ITodoItem } from 'types/TodoItem.interface';
import { AddTodoForm } from './AddTodoForm/AddTodoForm';

export const App: FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const handleAddTodo = (todo: ITodoItem) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList items={todos} onDeleteTodo={handleDeleteTodo} />
    </>
  );
};

// ideas
