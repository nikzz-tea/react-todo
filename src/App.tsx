import Task from './components/Task/Task';
import './scss/app.scss';

import { useSelector } from 'react-redux';
import { TTask } from './redux/taskSlice';
import { RootState } from './redux/store';
import AddField from './components/AddField/AddField';

function App() {
  const tasks = useSelector((state: RootState) => state.task.items);
  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <div className="container">
        <AddField />
        {tasks.map((task: TTask) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export default App;
