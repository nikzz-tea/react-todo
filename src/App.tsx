import Task from './components/Task/Task';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { TTask } from './redux/taskSlice';
import { RootState } from './redux/store';
import AddField from './components/AddField/AddField';
import Filter from './components/Filter/Filter';

import './scss/app.scss';

function App() {
  const items = useSelector((state: RootState) => state.task.items);
  const filteredItems = items.filter((item) => item.isDone !== true);
  const tasks = useSelector((state: RootState) => state.task.filtered) ? filteredItems : items;
  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <AddField />
      <Filter items={items} filteredItems={filteredItems} />
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
