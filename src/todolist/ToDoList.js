import React, { Component } from "react";
import { Container } from "./component/Container";
import { ThemeProvider } from "styled-components";
import { connect } from 'react-redux';
import { Dropdown } from "./ToDoListComponent/Dropdown";
import { Button } from "./ToDoListComponent/Button";
import { TextFiled} from "./ToDoListComponent/TextFiled";
import { Th, Tr } from "./ToDoListComponent/Table";
import {
  addTaskAction,
  changeThemeAction,
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
} from "../redux/actions/ToDoListActions";
import { arrTheme } from "./themes/ThemeManager";
import {
  Heading3,
} from "./ToDoListComponent/Heading";

class ToDoList extends Component {
  state = {
    taskName: "",
    disable: true,
  };

  componentDidMount() {
    console.log("componentWillMount da chay")
  }

  // renderTaskToDo = () => {
  //   return this.props.taskList
  //     .filter((task) => !task.done)
  //     .map((task, index) => {
  //       return (
  //         <Tr key={index}>
  //           <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
  //           <Th className="text-right">
  //             <Button
  //               onClick={() => {
  //                 this.setState({disabled: false},() => {this.props.dispatch(editTaskAction(task))})
  //             }}
  //               className="ml-1"
  //             >
  //               {" "}
  //               <i className="fa fa-check"></i>
  //             </Button>

  //             <Button onClick={() => { this.props.dispatch(doneTaskAction(task.id))}}
  //               className="ml-1">
  //               {" "}
  //               <i className="fa fa-check"></i>
  //             </Button>

  //             <Button
  //               onClick={() => { this.props.dispatch(deleteTaskAction(task.id))}}
  //               className="ml-1">
  //               <i className="fa fa-trash"></i>
  //             </Button>
  //           </Th>
  //         </Tr>
  //       );
  //     });
  // };

  // renderTaskCompleted = () => {
  //   return this.props.taskList
  //     .filter((task) => task.done)
  //     .map((task, index) => {
  //       return (
  //         <Tr key={index}>
  //           <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
  //         </Tr>
  //       )
  //     })
  // }

  renderTheme = () => {
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
              {this.renderTheme()}
            </Dropdown>
            <Heading3>To do list</Heading3>
            {/* <TextFiled value={this.state.taskName} onChange={(e) => { this.setState({
                taskName: e.target.value},() => {
                    console.log(this.state);
                  }
                )
              }} name="taskName" label="Task name"className="w-50" >
              <Button onClick={() => {  let { taskName } = this.state; 
              let newTask = {
                    id: Date.now(),
                    taskName: taskName,
                    done: false,
                  }
                  this.props.dispatch(addTaskAction(newTask));
                }} className="ml-2">
                  
                <i className="fa fa-plus">Add task</i>
              </Button>
            </TextFiled> */}
          </Container>
        </ThemeProvider>
      )
    }
}


const mapStateToProps = (state) =>{
  return {
    themeToDoList : state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit
  }
}

export default connect(mapStateToProps)(ToDoList)

