import { FC } from 'react';
import { ITodoItem } from 'types/TodoItem.interface';

interface IProps {
  todo: ITodoItem;
  onDeleteTodo: () => void;
}

export const TodoItem: FC<IProps> = ({ todo: { id, title }, onDeleteTodo }) => (
  <div>
    <p>{id}</p>
    <p>{title}</p>
    <button type="button" onClick={onDeleteTodo}>
      Delete
    </button>
  </div>
);
