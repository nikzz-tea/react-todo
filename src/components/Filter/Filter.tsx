import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TTask, filterItems } from '../../redux/taskSlice';

import './filter.scss';

interface Props {
  items: TTask[];
  filteredItems: TTask[];
}

const Filter: FC<Props> = ({ items, filteredItems }) => {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <span onClick={() => dispatch(filterItems(false))}>All ({items.length})</span> |{' '}
      <span onClick={() => dispatch(filterItems(true))}>Active ({filteredItems.length})</span>
    </div>
  );
};

export default Filter;
