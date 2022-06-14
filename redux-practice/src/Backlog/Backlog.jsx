import { useSelector } from "react-redux";
import { getTasks } from "../store/tasks/selectors";
import Task from "../Task/Task";
import { useMemo } from "react";
import { TaskType } from "../models/task";

function Backlog() {
    const tasks = useSelector(getTasks);

    const backLogTasks = useMemo(() => {
        return tasks?.filter((task) => task.type === TaskType.BACKLOG);
    }, [tasks]);

    return (
        <article className="taskboard__group taskboard__group--backlog">
            <h3 className="taskboard__group-heading taskboard__group-heading--backlog">Бэклог</h3>
            <div className="taskboard__list">
                {backLogTasks?.map((task, index) => <Task title={task.title} type={task.type} key={`${task.title}${index}`} />)}
            </div>
        </article>
    )
}

export default Backlog;
