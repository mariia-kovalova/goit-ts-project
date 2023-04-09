import { FC } from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import { deleteTodo, updateTodo } from 'redux/todos/operations';
import { ITodoItem } from 'types/TodoItem.interface';

import { Box, Checkbox, Button, Text } from '@chakra-ui/react';

interface IProps {
  todo: ITodoItem;
}

export const TodoItem: FC<IProps> = ({ todo: { id, title, isCompleted } }) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(
      updateTodo({
        id,
        isCompleted: !isCompleted,
      })
    );
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" gap="10px">
        <Checkbox checked={isCompleted} onChange={handleToggle} />
        <Text fontSize="md">{title}</Text>
      </Box>
      <Button type="button" onClick={handleDeleteTodo}>
        Delete
      </Button>
    </Box>
  );
};
