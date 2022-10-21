import React from 'react';
import './task.scss';

import { useDispatch } from 'react-redux';
import { toggleDone, removeItem, TTask } from '../../redux/taskSlice';

const Task: React.FC<TTask> = (props) => {
  const dispatch = useDispatch();

  const onCheck = () => dispatch(toggleDone(props.id));

  const onDelete = () => dispatch(removeItem(props.id));

  return (
    <div className={`task ${props.isDone ? 'done' : ''}`}>
      <div onClick={onCheck} className={`check`}>
        <svg
          height="15px"
          version="1.1"
          viewBox="0 0 18 15"
          width="18px"
          xmlns="http://www.w3.org/2000/svg">
          <title />
          <desc />
          <defs />
          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g fill="#000000" id="Core" transform="translate(-423.000000, -47.000000)">
              <g id="check" transform="translate(423.000000, 47.500000)">
                <path d="M6,10.2 L1.8,6 L0.4,7.4 L6,13 L18,1 L16.6,-0.4 L6,10.2 Z" id="Shape" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="title">{props.title}</div>
      <div className="delete">
        <svg
          onClick={onDelete}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default Task;
