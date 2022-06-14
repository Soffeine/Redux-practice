import Header from '../Header/Header';
import TaskBoard from "../TaskBoard/TaskBoard";
import AddTask from "../AddTask/AddTask";

function App() {
  return (
    <body className="board-app">
      <Header />
      <main className="board-app__main">
        <div className="board-app__inner">
          <AddTask />
          <TaskBoard />
        </div>
      </main>
    </body>
  );
}

export default App;
