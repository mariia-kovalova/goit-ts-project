import { FC, ChangeEvent, FormEvent, useState } from 'react';
import { ITodoItem } from 'types/TodoItem.interface';

interface IProps {
  onAddTodo: (todo: ITodoItem) => void;
}

type OnlyTitle = Pick<ITodoItem, 'title'>;

const initislState = { title: '' };

export const AddTodoForm: FC<IProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState<Partial<OnlyTitle>>(initislState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      title: e.target.value.trim(),
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!todo.title || todo.title === '') {
      return alert('This field is required.');
    }
    onAddTodo({ id: Math.random().toString(), title: todo.title });
    setTodo(initislState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={handleChange}
        value={todo.title}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};
