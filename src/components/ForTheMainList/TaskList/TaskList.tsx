import { useState, useEffect } from "react"
import "./TaskList.scss"
import { MyAddTaskList } from "../TaskAddList/TaskAddList"
import { ITodoData } from "../../../Auxiliary components/ITodoData"

interface ITaskListProps {
    tasks: ITodoData[]
    onToggleComplete?: (id: number) => void;
    onOpenAddForm: () => void;
    onDeleteStorage: (id: number) => void;
}

const MyTaskList: React.FC<ITaskListProps> = ({tasks, onDeleteStorage, onToggleComplete, onOpenAddForm}) => {
    const [ isCollapsed, setIsCollapsed ] = useState(false)

    return (
        <div id="container--main-list">
            <div className="containing--in-class">
                <div className="add--view-time">
                    <div className="button--add">
                        <button 
                        id="new--button-add"
                        onClick={onOpenAddForm}
                        >Add</button>
                    </div>
                    <div className="view--add">
                        <select name="view" className="view--of-features">
                            <option value="All" className="option--all function--one">All</option>
                            <option value="Complete" className="option--all function--Two">Completed</option>
                            <option value="Unfulfilled" className="option--all function--Three">Unfulfilled</option>
                            <option value="Unfulfilled" className="option--all function--Four">New</option>
                            <option value="Unfulfilled" className="option--all function--Five">Old</option>
                        </select>
                    </div>
                </div>
                <div className={`recording--field ${isCollapsed} ? 'collapsed' : ''}`}>
                    {tasks.map(todos => {
                        return (
                            <div className="task--item" key={todos.id}>
                                <div className="label--item">
                                    <label className="new--arr arr-title">{todos.title}</label>
                                </div>
                                <div className="textarea--item">
                                    <textarea className="new--arr arr-description" value={todos.description} rows={5} readOnly contentEditable/>
                                </div>
                                <button className="delete" onClick={() => onDeleteStorage(todos.id)}>Удалить</button>
                            </div> 
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export { MyTaskList }