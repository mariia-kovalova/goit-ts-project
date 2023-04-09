import {
  selectTodosError,
  selectTodosIsLoading,
  selectTodosItems,
} from 'redux/todos/selectors';
import { useAppSelector } from './useRedux';

export const useTodos = () => {
  const isLoading = useAppSelector(selectTodosIsLoading);
  const error = useAppSelector(selectTodosError);
  const items = useAppSelector(selectTodosItems);

  return {
    isLoading,
    error,
    items,
  };
};
