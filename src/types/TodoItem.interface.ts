export interface ITodoItem {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export type OnlyCompletedAndId = Pick<ITodoItem, 'isCompleted' | 'id'>;
