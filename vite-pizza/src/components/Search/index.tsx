import React, { useRef, useCallback, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../redux/filter/slice';

import clearIcon from '../../assets/img/close-icon.svg';
import searchIcon from '../../assets/img/search.svg';

import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    inputEl.current?.focus();
    setValue('');
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value);
    setValue(e.target.value);
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      if (pathname !== '/') {
        navigate('/');
      }

      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  return (
    <div className={styles.wrapper}>
      <img src={searchIcon} className={`${styles.icon} ${styles.searchIcon}`} alt='' />
      <input
        ref={inputEl}
        className={styles.input}
        placeholder='Поиск пиццы...'
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <img
          src={clearIcon}
          className={`${styles.icon} ${styles.clearIcon}`}
          onClick={onClickClear}
          alt='Clear search btn'
        />
      )}
    </div>
  );
};
