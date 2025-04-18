export interface ITodoData {
    id: number; // Можно использовать как число, так и строку (например, UUID1)
    title: string;       // Убрал number, так как название задачи - это всегда строка
    description: string; // Переименовал content в description (более стандартное название)
    completed: boolean;  // Переименовал complete в completed (более правильный английский)
    createdAt: Date | string; // Дата создания (опционально)
    dueDate?: Date | string;   // Срок выполнения (опционально)
    priority?: 'low' | 'medium' | 'high'; // Приоритет задачи
    tags?: string[];           // Метки/теги для задачи
    category?: string;         // Категория задачи
    isImportant?: boolean;     // Важная задача
    subtasks?: ITodoData[];    // Подзадачи (возможность вложенности)
}