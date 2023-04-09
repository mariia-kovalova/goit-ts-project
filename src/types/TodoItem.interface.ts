export interface ITodoItem {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type OnlyTitle = Pick<ITodoItem, 'title'>;

export type OnlyCompletedAndId = Pick<ITodoItem, 'isCompleted' | 'id'>;
