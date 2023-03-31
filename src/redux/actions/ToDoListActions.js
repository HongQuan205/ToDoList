import { ADD_TASK,CHANGE_THEME,DONE_TASK,DELETE_TASK,EDIT_TASK,UPDATE_TASK } from "../types/ToDoListTypes";

export const addTaskAction = (newTask) =>{
    return {
        type: ADD_TASK,
        newTask
    }
}

export const changeThemeAction = (themeId) =>{
    return {
        type: CHANGE_THEME,
        themeId
    }
}

export const doneTaskAction = (taskId) =>{
   return {
    type: DONE_TASK,
    taskId,
   }
}

export const deleteTaskAction = (taskId) =>({
    type: DELETE_TASK,
    taskId,
})

export const editTaskAction = (task) => ({
    type: EDIT_TASK,
    task
})

export const updateTask = ((taskName) =>({
    type: UPDATE_TASK,
    taskName
}))