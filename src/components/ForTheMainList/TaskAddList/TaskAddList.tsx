import { useState, useEffect } from "react";
import "./TaskAddList.scss";
import { ITodoData } from "../../../Auxiliary components/ITodoData";
import { MyTaskList } from "../TaskList/TaskList";
import { ParentComponent } from "../../../Auxiliary components/ParentComponent";

interface IExitProps {
    onClose: () => void
    isHidden?: boolean
    onAddTask: (title: string, description: string) => void;
}

const MyAddTaskList: React.FC<IExitProps> = ({onClose, isHidden = false, onAddTask}) => {
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [todos, setTodos] = useState<ITodoData[]>([]);

    const handleClickAddTodo = () => {
        if(!titleValue.trim()) return;
        onAddTask(titleValue, descriptionValue)


        setTitleValue('');
        setDescriptionValue('');
    }

    const handleToggleComplete = (id:number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed : !todo.completed} : todo
        ))
    }

    return(
        <div id="container--creating-goals"
            style={{ display: isHidden ? 'none' : 'block' }}
        >
            <h2><b>Список задач</b></h2>
            <button 
                className="exit"
                onClick={onClose}
                aria-label="Закрыть"
            >X</button>
            <div className="todo--model">
                <div className="task">
                    <div className="container--task-title">
                        <label className="task--title">Задача</label>
                    </div>
                    <div className="container--task-input">
                        <input 
                            type="text" 
                            name="task" 
                            value={titleValue}
                            maxLength={105}
                            onChange={(e) => setTitleValue(e.target.value)} 
                            className="new--task-title"
                            placeholder="Назовите задачу"
                        />
                    </div>
                </div>
                <div className="description">
                    <div className="container--description-title">
                        <label className="description--title">Описание</label>
                    </div>
                    <div className="container--description-input">
                        <textarea 
                            name="description" 
                            value={descriptionValue} 
                            onChange={(e) => setDescriptionValue(e.target.value)}
                            className="new--description-title" 
                            placeholder="Опишите задачу"
                        >
                        </textarea>
                    </div>
                </div>
                <button 
                    onClick={handleClickAddTodo}
                    disabled={!titleValue.trim()}
                >Add</button>
            </div>
        </div>
    )
}
export { MyAddTaskList }