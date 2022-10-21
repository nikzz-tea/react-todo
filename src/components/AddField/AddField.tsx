import React, { useState } from 'react';
import './addfield.scss';

import { useDispatch } from 'react-redux';
import { addItem, TTask } from '../../redux/taskSlice';

const AddField: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const item: TTask = {
    id: Number(Date.now()),
    title: value,
    isDone: false
  };

  const onAdd = () => {
    if (value) {
      dispatch(addItem(item));
    }
    setValue('');
  };

  return (
    <div className="addfield">
      <input
        type="text"
        placeholder="Add a task..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        maxLength={300}
        onKeyDown={(e) => e.key === 'Enter' && onAdd()}
      />
      <svg
        onClick={onAdd}
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h48v48H0z" fill="none" />
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z" />
      </svg>
    </div>
  );
};

export default AddField;
