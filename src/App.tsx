import Task from './components/Task/Task';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
      <AddField />
      <TransitionGroup className="container">
        {tasks.map((task: TTask) => (
          <CSSTransition<undefined> key={task.id} timeout={500} classNames="task">
            <Task key={task.id} {...task} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
