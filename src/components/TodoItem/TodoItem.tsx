import React from 'react';
import { ITodoItem } from 'interfaces/TodoItem.interface';

export const TodoItem: React.FC<ITodoItem> = props => {
  const { title } = props;

  return (
    <div>
      <span>{title}</span>
    </div>
  );
};
