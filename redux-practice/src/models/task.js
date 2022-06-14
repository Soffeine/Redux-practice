export const TaskType = {
    ADD_TASK: 'ADD_TASK',
    BACKLOG: 'BACKLOG',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    TRASH: 'TRASH',
}

export const TaskClassMap = {
    [TaskType.BACKLOG]: '',
    [TaskType.IN_PROGRESS]: 'task--processing',
    [TaskType.DONE]: 'task--done',
    [TaskType.TRASH]: 'task--basket',
}
