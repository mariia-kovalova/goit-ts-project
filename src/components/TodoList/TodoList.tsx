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
    <Container>
      {showTodoList && (
        <List display="flex" flexDirection="column" gap="10px">
          {items.map(todo => (
            <ListItem key={todo.id}>
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
