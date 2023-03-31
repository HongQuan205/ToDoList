import React, { Component } from "react";
import { Container } from "./component/Container";
import { ThemeProvider } from "styled-components";
import { connect } from 'react-redux';
import { Dropdown } from "./ToDoListComponent/Dropdown";
import { Button,ButtonToDoList } from "./ToDoListComponent/Button";
import { TextFiled} from "./ToDoListComponent/TextFiled";
import { Table, Th, Thead, Tr } from "./ToDoListComponent/Table";
import moment from 'moment';
import {
  addTaskAction,
  changeThemeAction,
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
  updateTask,
} from "../redux/actions/ToDoListActions";
import { arrTheme } from "./themes/ThemeManager";
import {
  Heading3,
} from "./ToDoListComponent/Heading";

class ToDoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };



  renderTaskToDo = () => {
    return this.props.taskList.filter(task => !task.done).map((task,index) =>{
        return <Tr key = {index}>
         <Th style={{verticalAlign: 'middle'}}>
            {task.taskName.toUpperCase()}
         </Th>
         <Th className="text-right">
            <ButtonToDoList onClick={() =>{
              this.setState({
                disabled:false
              }, () =>{
                console.log(this.state)
                this.props.dispatch(editTaskAction(task))
              })
            }} className = "ml-1"> <i className="fa fa-edit"></i>

            </ButtonToDoList>

            <ButtonToDoList onClick={() =>{
                this.props.dispatch(doneTaskAction(task.id))
            }} className="ml-1"> <i className="fa fa-check"></i></ButtonToDoList>

            <ButtonToDoList onClick={() =>{
              this.props.dispatch(deleteTaskAction(task.id))
            }}>
              <i className="fa fa-trash"></i>
            </ButtonToDoList>
         </Th>
        </Tr>
    })
  }

  renderCompletedTask = () =>{
      return this.props.taskList.filter(task => task.done).map((task,index) =>{
        return <Tr key = {index}>
          <Th style={{verticalAlign:'middle'}}>
            {task.taskName.toUpperCase()}
          </Th>
          <Th className="text-right">
          <ButtonToDoList  onClick={() =>{
              this.props.dispatch(deleteTaskAction(task.id))
            }}>
              <i className="fa fa-trash"></i>
            </ButtonToDoList>
          </Th>
        </Tr>
      })
  }

  renderThemeDropdown = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option key={index} value={theme.id}>
          {theme.name}
        </option>
      )
    })
  }
  

    render() {
      return (
        <ThemeProvider theme={this.props.themeToDoList}>
          <Container className="w-50">
            <Dropdown onChange={
              (e) => { 
                let { value } = e.target
                this.props.dispatch(changeThemeAction(value))
              }}>
              {this.renderThemeDropdown()}
            </Dropdown>
            <Heading3>To do list</Heading3>
            <TextFiled value = {this.state.taskName} onChange = {(e) =>{
                this.setState({
                  taskName: e.target.value
                })
            }} name = "taskName" label="Task Name" className = "w-50" />

            <ButtonToDoList onClick={ () =>{

              let {taskName} = this.state

              let newTask = {
                id: moment().format('DD/MM/YYYY hh:mm:ss'),
                taskName: taskName,
                done: false
              }
              this.props.dispatch(addTaskAction(newTask))
            }} className= "ml-2">
              <i className="fa fa-plus"></i>
              Add Task
            </ButtonToDoList>
            {
              this.state.disabled ? <ButtonToDoList disabled className="ml-2">Update Task</ButtonToDoList> : 
              <ButtonToDoList onClick={() =>{
                let {taskName} = this.state
                this.setState({
                  disabled: true,
                  taskName:this.state.taskName
                }, () =>{
                  this.props.dispatch(updateTask(taskName))
                })
              }}>
                Update Task
              </ButtonToDoList>
            }

            <hr/>
            <Heading3>Task to do</Heading3>
            <Table>
              <Thead>
               {this.renderTaskToDo()}
              </Thead>
            </Table>

            <Heading3>Task completed</Heading3>
            <Table>
              <Thead>
               {this.renderCompletedTask()}
              </Thead>
            </Table>
          </Container>
        </ThemeProvider>
      )
    }

    componentDidUpdate(prevProps, prevState ){
      if(prevProps.taskEdit.id !== this.props.taskEdit.id){
        this.setState({
          taskName: this.props.taskEdit.taskName
        })
      }
    }
}



const mapStateToProps = (state) =>{
  console.log(state.ToDoListReducer.taskList)
  return {
    themeToDoList : state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit
  }
}

export default connect(mapStateToProps)(ToDoList)

