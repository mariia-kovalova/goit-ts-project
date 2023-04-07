import { FC } from 'react';
import { TodoItem } from 'components/TodoItem';
import { ITodoItem } from 'types/TodoItem.interface';

interface IProps {
  items: ITodoItem[];
  onDeleteTodo: (id: string) => void;
}

export const TodoList: FC<IProps> = ({ items, onDeleteTodo }) => (
  <ul>
    {items.map(todo => (
      <li key={todo.id}>
        <TodoItem todo={todo} onDeleteTodo={() => onDeleteTodo(todo.id)} />
      </li>
    ))}
  </ul>
);
