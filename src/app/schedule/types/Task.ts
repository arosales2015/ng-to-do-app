export type Task = {
    id: number;
    displayText: string;
    description?: string;
    status: 'pending' | 'onGoin' | 'done';
  }