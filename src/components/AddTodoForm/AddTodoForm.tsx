import { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from 'hooks/useRedux';
import { addTodo } from 'redux/todos/operations';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';

type Inputs = {
  title: string;
};

const taskId = nanoid();
const titleId = nanoid();

export const AddTodoForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ defaultValues: { title: '' } });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = values => {
    dispatch(
      addTodo({
        id: taskId,
        isCompleted: false,
        ...values,
      })
    );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={errors.title && true}
          display="flex"
          alignItems="center"
        >
          <FormLabel htmlFor={titleId}>Title</FormLabel>
          <Input
            type="text"
            id={titleId}
            {...register('title', {
              required: 'This is required',
              minLength: { value: 2, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>Error</FormErrorMessage>
        </FormControl>
        <Button type="submit" disabled={isSubmitting}>
          Add todo
        </Button>
      </form>
    </Container>
  );
};
