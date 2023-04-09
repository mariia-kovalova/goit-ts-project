import { FC } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm/AddTodoForm';

export const App: FC = () => {
  return (
    <>
      <AddTodoForm />
      <TodoList />
    </>
  );
};

// chakra:
// loader
