import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from 'hooks/useRedux';
import { FC, ChangeEvent, FormEvent, useState } from 'react';
import { addTodo } from 'redux/todos/operations';
import { OnlyTitle } from 'types/TodoItem.interface';

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
} from '@chakra-ui/react';

const initislState = { title: '' };

const taskId = nanoid();

export const AddTodoForm: FC = () => {
  const [todo, setTodo] = useState<Partial<OnlyTitle>>(initislState);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ title: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!todo.title || todo.title === '') {
      return alert('This field is required.');
    }
    dispatch(
      addTodo({
        id: taskId,
        title: todo.title,
        isCompleted: false,
      })
    );
    setTodo(initislState);
  };

  return (
    <Container>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={todo.title}
        />
        <FormHelperText>Enter your todo</FormHelperText>
        <Button type="submit">Add todo</Button>
      </FormControl>
    </Container>
  );
};
