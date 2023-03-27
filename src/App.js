
import './App.css';
import ContextProvider from './hooks/context/ContextProvider';
import  ToDoList  from './todolist/ToDoList';

function App() {
  return (
    <ContextProvider>
      <ToDoList/>
    </ContextProvider>
  );
}

export default App;
