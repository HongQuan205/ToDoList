import { ToDoListDarkTheme } from "../../todolist/themes/ToDoListDarkTheme";
import {ADD_TASK, CHANGE_THEME, DONE_TASK, DELETE_TASK, EDIT_TASK, UPDATE_TASK} from '../types/ToDoListTypes'
import { arrTheme } from "../../todolist/themes/ThemeManager";


const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList : [
        {id:'task-1', taskName: 'task 1', done: true},
        {id:'task-2', taskName: 'task 2', done: false},
        {id:'task-3', taskName: 'task 3', done: false},
        {id:'task-4', taskName: 'task 4', done: true},        
    ],
    taskEdit: {id: '-1', taskName: '', done: false}
}

export const  ToDoListReducer =  (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK : {
            if(action.newTask.taskName.trim() === '')
            {
               alert('Task name is required')
               return {...state}
            }

            return {...state}
        }
        case CHANGE_THEME : {
            let theme = arrTheme.find(theme => theme.id === Number(action.themeId))
            if(theme){
                state.themeToDoList = {...theme.theme}
            }

            return {...state}
        }

        case DONE_TASK :{
            let taskListUpdate = [...state.taskList]

            let index = taskListUpdate.findIndex(task => task.id === action.taskId)
           if(index !== -1)
           {
            taskListUpdate[index].done = true
           } 
           return {...state, taskList: taskListUpdate}
        }
        case DELETE_TASK :{
            return {...state, taskList: state.taskList.filter(task => task.id !== action.taskId)}
        }
        case EDIT_TASK:{
            return {...state, taskEdit: action.task}
        }

        case UPDATE_TASK : {
            state.taskEdit = {...state.taskEdit, taskName: action.taskName}

            let taskListUpdate = [...state.taskList]
            let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id)

            if(index !== -1)
            {
                taskListUpdate[index] = state.taskEdit
            }

            state.taskEdit = taskListUpdate
            state.taskEdit = {id : '-1', taskName:'', done: false}
            return {...state}
        }

        default : 
                return { ...state }
    }
}