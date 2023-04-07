import React from 'react';
import todos from '../data/todos.json';
import { TodoList } from './TodoList';

export const App: React.FC = () => {
  return <TodoList items={todos} />;
};

// ideas

// path "../../../" - congig?
