import { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from 'hooks/useRedux';
import { addTodo } from 'redux/todos/operations';
import { useTodos } from 'hooks/useTodos';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';

type Inputs = {
  title: string;
  description: string;
};

const taskId = nanoid();
const titleId = nanoid();
const descriptionId = nanoid();

export const AddTodoForm: FC = () => {
  const { isLoading } = useTodos();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>({ defaultValues: { title: '', description: '' } });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = values => {
    dispatch(
      addTodo({
        id: taskId,
        isCompleted: false,
        ...values,
      })
    );
    reset();
  };

  return (
    <Container padding="20px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.title && true}>
          <FormLabel htmlFor={titleId}>Title</FormLabel>
          <Box display="flex" flexDirection="column">
            <Input
              type="text"
              id={titleId}
              {...register('title', {
                required: 'This is required',
                minLength: { value: 2, message: 'Minimum length should be 2' },
              })}
            />
            <FormErrorMessage>
              {errors.title && errors.title.message}
            </FormErrorMessage>
          </Box>
        </FormControl>
        <FormControl isInvalid={errors.description && true}>
          <FormLabel htmlFor={descriptionId}>Description</FormLabel>
          <Box display="flex" flexDirection="column">
            <Input
              type="text"
              id={descriptionId}
              {...register('description', {
                required: 'This is required',
                minLength: { value: 2, message: 'Minimum length should be 2' },
              })}
            />
            <FormErrorMessage>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </Box>
        </FormControl>
        <Box margin="10px auto" width="fit-content">
          <Button
            type="submit"
            isLoading={isSubmitting && isLoading}
            loadingText="Loading"
          >
            Add todo
          </Button>
        </Box>
      </form>
    </Container>
  );
};
