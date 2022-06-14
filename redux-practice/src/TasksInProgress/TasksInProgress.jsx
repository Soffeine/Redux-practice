import { useSelector } from "react-redux";
import { getTasks } from "../store/tasks/selectors";
import { useMemo } from "react";
import { TaskType } from "../models/task";
import Task from "../Task/Task";

function TasksInProgress() {
    const tasks = useSelector(getTasks)

    const inProgressTasks = useMemo(() => {
        return tasks.filter((task) => task.type === TaskType.IN_PROGRESS);
    }, [tasks])

    return (
        <article className="taskboard__group taskboard__group--processing">
            <h3 className="taskboard__group-heading taskboard__group-heading--processing">В процессе</h3>
            <div className="taskboard__list taskboard__list--sorted">
                <div class="taskboard__item task task--empty">
                    <p>Перетащите карточку</p>
                </div>
                {inProgressTasks?.map((task, index) => <Task title={task.title} type={task.type} key={`${task.title}${index}`} />)}
            </div>
        </article>
    )
}

export default TasksInProgress;
