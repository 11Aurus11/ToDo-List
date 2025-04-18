import React, { useState, useEffect } from "react";
import { MyAddTaskList } from "../components/ForTheMainList/TaskAddList/TaskAddList";
import { MyTaskList } from "../components/ForTheMainList/TaskList/TaskList";
import { ITodoData } from "../Auxiliary components/ITodoData";

const ParentComponent = () => {
    const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
    const [todos, setTodos] = useState<ITodoData[]>(() => {
        //? Загружаем todos из localStorage при первом рендере
        const savedTodos = localStorage.getItem('todos')
        if(savedTodos) {
            return JSON.parse(savedTodos).map((todo: any) => ({
                ...todo,
                createdAt: new Date(todo.createdAt) //<> Востанавливаем Date
            }));
        }
        return [] //! Если нет сохраненных данных
    })
    //? Сохраняем todos в localStorage при каждом изменении
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDeleteStorage = (id: number) => {
        localStorage.removeItem('todos');
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleAddTask = (title: string, description: string) => {
        const newTodo: ITodoData = {
            id: Date.now(),
            title,
            description,
            completed: false,
            createdAt: new Date(),
        }
        setTodos([...todos, newTodo]);
    }
    

    return (
        <>
            <MyTaskList 
                tasks={todos}
                onOpenAddForm={() => setIsTaskFormOpen(true)}
                onDeleteStorage={ handleDeleteStorage}
            />
            
            {isTaskFormOpen && (
                <MyAddTaskList 
                    onClose={() => setIsTaskFormOpen(false)}
                    onAddTask={handleAddTask}
                />
            )}

        </>
    );
};

export { ParentComponent };