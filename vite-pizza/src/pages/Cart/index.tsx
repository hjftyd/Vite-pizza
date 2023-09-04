import React, { useCallback, useMemo } from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { selectCart } from '../../redux/cart/selectors';
import { clearItems } from '../../redux/cart/slice';

import { CartEmpty, CartItem } from '../../components';

import { FoodTrolley, IconLeft, Trash } from '../../components/icons';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = useMemo(
    () => items.reduce((sum: number, item) => sum + item.count, 0),
    [items],
  );

  const CartItems = useMemo(
    () => items.map((item) => <CartItem key={item.id} {...item} />),
    [items],
  );

  const onClickClear = useCallback(() => {
    dispatch(clearItems());
  }, [dispatch]);

  if (items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className='container container--cart'>
      <div className='cart'>
        <div className='cart__top'>
          <h2 className='content__title'>
            <FoodTrolley />
            Корзина
          </h2>
          <div onClick={onClickClear} className='cart__clear'>
            <Trash />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className='content__items'>{CartItems}</div>
        <div className='cart__bottom'>
          <div className='cart__bottom-details'>
            <span>
              {' '}
              Всего пицц: <b>{totalCount} шт.</b>{' '}
            </span>
            <span>
              {' '}
              Сумма заказа: <b>{totalPrice} ₽</b>{' '}
            </span>
          </div>
          <div className='cart__bottom-buttons'>
            <Link to='/' className='button button--outline button--add go-back-btn'>
              <IconLeft />
              <span>
                <span className='only-for-pc'>Вернуться </span>назад
              </span>
            </Link>
            <div className='button pay-btn'>
              <span>
                Оплатить <span className='only-for-pc'>сейчас</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
