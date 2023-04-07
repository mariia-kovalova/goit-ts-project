import React from 'react';
import { ITodoItem } from '../../interfaces/TodoItem.interface';

export const TodoItem: React.FC<ITodoItem> = props => {
  const { id, title } = props;

  return (
    <div>
      <span>{id}</span>
      <span>{title}</span>
    </div>
  );
};
