import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setCurrentPage } from '../../redux/filter/slice';
import { RootState } from '../../redux/store';

import { Categories, Pagination, PizzaItems, Sort } from '../../components';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.filter.currentPage);
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const countItems = useSelector((state: RootState) => state.pizza.countItems);

  const onChangeCategory = React.useCallback(
    (idx: number) => {
      dispatch(setCategoryId(idx));
    },
    [dispatch],
  );

  const onChangePage = React.useCallback(
    (page: number) => dispatch(setCurrentPage(page)),
    [dispatch],
  );

  React.useEffect(() => {
    window.scrollTo(30, 30);
  }, []);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories currentCategoryId={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        <PizzaItems />
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} count={countItems} />
    </div>
  );
};
