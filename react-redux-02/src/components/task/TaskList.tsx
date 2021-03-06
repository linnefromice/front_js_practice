import React from "react"
import "./TaskList.scss"
import { Task } from "./Task"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

export const TaskList = () => {
    const tasks = useSelector((state: RootState) => state.tasks)

    return (
        <div className="TaskList">
            {tasks.map((task, index) => (
                <div key={`task.${task.id}.${index}`} className="TaskList__content">
                    <Task id={task.id} status={task.status} title={task.title}/>
                </div>
            ))}
        </div>
    )
}