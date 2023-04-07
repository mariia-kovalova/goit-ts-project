import React from 'react';
import { ITodoList } from 'interfaces/TodoList.interface';
import { TodoItem } from 'components/TodoItem';

export const TodoList: React.FC<ITodoList> = props => {
  const { items } = props;

  return (
    <ul>
      {items.map(({ id, title }) => (
        <li key={id}>
          <TodoItem id={id} title={title} />
        </li>
      ))}
    </ul>
  );
};
