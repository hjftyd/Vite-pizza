import React, { useState, useEffect, useRef, memo } from 'react';
import { isEqual } from 'lodash';

import { useDispatch, useSelector } from 'react-redux';

import { sortBy, SortItem, sortOrder, SortPropertyEnum } from '../../redux/filter/types';
import { selectSort } from '../../redux/filter/selectors';
import { setSort } from '../../redux/filter/slice';

import { IconArrow } from '../icons/IconArrowTop';

export const sortList: SortItem[] = [
  { name: SortPropertyEnum.RATING, sortBy: sortBy.RATING, order: sortOrder.DESC },
  {
    name: SortPropertyEnum.EXPENSIVE,
    sortBy: sortBy.PRICE,
    order: sortOrder.DESC,
  },
  { name: SortPropertyEnum.CHEAP, sortBy: sortBy.PRICE, order: sortOrder.ASC },
  { name: SortPropertyEnum.ALPHABET, sortBy: sortBy.TITLE, order: sortOrder.ASC },
  {
    name: SortPropertyEnum.REVERSE_ALPHABET,
    sortBy: sortBy.TITLE,
    order: sortOrder.DESC,
  },
];

export const Sort: React.FC = memo(() => {
  const dispatch = useDispatch();

  const sort = useSelector(selectSort);
  const sortRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const onClickListItem = (newSort: SortItem) => {
    if (!isEqual(newSort, sort)) {
      dispatch(setSort(newSort));
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <IconArrow />
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.name === obj.name ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
