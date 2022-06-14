import { getTasks } from "../store/tasks/selectors";
import { useMemo, useState } from "react";
import { TaskType } from "../models/task";
import Task from "../Task/Task";
import { useSelector } from "react-redux";

function Trash() {

    const tasks = useSelector(getTasks);
    

    const tasksInTrash = useMemo(() => {
        return tasks.filter((task) => task.type === TaskType.TRASH);
    }, [tasks])

    const cleanTrash = () => {
        console.log("clicked")
        return tasks.filter((task) => task.type !== TaskType.TRASH).splice(); 
    }

    return (
        <article className="taskboard__group taskboard__group--basket">
            <h3 className="taskboard__group-heading taskboard__group-heading--basket">Корзина</h3>
            <div className="taskboard__list taskboard__list--trash">

                <div className="task--empty task task--empty-trash">
                    <p>Корзина пуста</p>
                </div>
                {tasksInTrash?.map((task, index) => <Task title={task.title} type={task.type} key={`${task.title}${index}`} />)}
            </div>
            <button className="taskboard__button button button--clear" type="button" onClick={cleanTrash}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15.5374" y="5.16638" width="1.83333" height="14.6667" transform="rotate(45 15.5374 5.16638)"
                        fill="white" />
                    <rect x="16.8337" y="15.5372" width="1.83333" height="14.6667" transform="rotate(135 16.8337 15.5372)"
                        fill="white" />
                </svg>
                <span>Очистить</span>
            </button>
        </article>
    )
}

export default Trash;
