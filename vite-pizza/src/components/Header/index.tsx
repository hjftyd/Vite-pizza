import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { initialState, setFilters } from '../../redux/filter/slice';
import { CartSliceState } from '../../redux/cart/types';
import { selectCart } from '../../redux/cart/selectors';
import { useAppDispatch } from '../../redux/store';
import { setCart } from '../../redux/cart/slice';

import { Search } from '../Search';

import { IconCart } from '../icons';
import logoSvg from '../../assets/img/pizza-logo.svg';

export const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const isMounted = React.useRef(false);
  const dispatch = useAppDispatch();

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const clearFilters = () => {
    dispatch(setFilters(initialState));
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const cartString = JSON.stringify({ items, totalPrice });
      localStorage.setItem('cart', cartString);
    }
    isMounted.current = true;
  }, [items, totalPrice]);

  React.useEffect(() => {
    const cartString = localStorage.getItem('cart');

    if (cartString) {
      const cart: CartSliceState = JSON.parse(cartString);
      dispatch(setCart(cart));
    }
  }, [dispatch]);

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Link onClick={clearFilters} to='/' className='header__link'>
            <div className='header__logo'>
              <img width='38' src={logoSvg} alt='Pizza logo' />
              <div>
                <h1>React Pizza</h1>
              </div>
            </div>
          </Link>
          <Search />
        </div>
        <div className='header__cart'>
          <Link to='/cart' className='button button--cart'>
            <span>{totalPrice} ₽</span>
            <div className='button__delimiter'></div>
            <IconCart />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
