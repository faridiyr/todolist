import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
