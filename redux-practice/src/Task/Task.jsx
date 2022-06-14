import { useState } from "react";
import {TaskClassMap} from "../models/task";

function Task({title, type}) {
    const currentClass = TaskClassMap[type];
    const [value, setValue] = useState(title)
    
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={`taskboard__item task ${currentClass}`}>
            <div className="task__body">
                {/* <p className="task__view">{title}</p> */}
                <input className={`task__input`} type="text" defaultValue={title} onChange={onChange} />
                {/* cделать проверку на клик и добавить класс на фокус, а еще освежить в памяти псевдоклассы */}
            </div>
            <button className="task__edit" type="button" aria-label="Изменить"></button>
        </div>
    )
}

export default Task;
