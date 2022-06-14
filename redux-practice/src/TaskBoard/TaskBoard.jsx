import Backlog from '../Backlog/Backlog';
import TasksInProgress from '../TasksInProgress/TasksInProgress';
import TasksDone from '../TasksDone/TasksDone';
import Trash from '../Trash/Trash';

function TaskBoard() {
    return (
        <section className="taskboard">
            <h2 className="visually-hidden">Ваши задачи:</h2>
            <Backlog />
            <TasksInProgress />
            <TasksDone />
            <Trash />
        </section>
    )
}

export default TaskBoard;