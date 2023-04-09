import { FC, useEffect } from 'react';
import { TodoItem } from 'components/TodoItem';
import { useAppDispatch } from 'hooks/useRedux';
import { getTodos } from 'redux/todos/operations';
import { useTodos } from 'hooks/useTodos';

import { Container, List, ListItem } from '@chakra-ui/react';

export const TodoList: FC = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useTodos();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const showTodoList = items.length !== 0;

  return (
    <Container padding="20px">
      {showTodoList && (
        <List display="flex" flexDirection="column" gap="5px">
          {items.map(todo => (
            <ListItem
              key={todo.id}
              padding="5px 10px"
              border="1px solid black"
              borderRadius="4px"
            >
              <TodoItem todo={todo} />
            </ListItem>
          ))}
        </List>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>Sorry, something went wrong</div>}
    </Container>
  );
};
