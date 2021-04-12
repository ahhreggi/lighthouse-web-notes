import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import todoListData from "./todoData";

function App() {
  return (
    <div className="App">
      <TodoList todoListData={todoListData} potatoes={5} fun="definitely" />
      <TodoForm />
    </div>
  );
}

export default App;
