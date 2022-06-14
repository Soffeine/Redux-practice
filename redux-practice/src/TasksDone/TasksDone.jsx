import { useSelector } from "react-redux";
import { getTasks } from "../store/tasks/selectors";
import { useMemo } from "react";
import { TaskType } from "../models/task";
import Task from "../Task/Task";


function TasksDone() {

    const tasks = useSelector(getTasks);

    const doneTasks = useMemo(() => {
        return tasks.filter((task) => task.type === TaskType.DONE);
    }, [tasks])
    return (
        <article className="taskboard__group taskboard__group--done">
            <h3 className="taskboard__group-heading taskboard__group-heading--done">Готово</h3>
            <div className="taskboard__list taskboard__list--sorted">
                {/* здесь сделать проверку наличие в массиве нужных карточек */}
                <div class="taskboard__item task task--empty">
                    <p>Перетащите карточку</p>
                </div>
                {doneTasks?.map((task, index) => <Task title={task.title} type={task.type} key={`${task.title}${index}`} />)}
            </div>
        </article>
    )
}

export default TasksDone;
