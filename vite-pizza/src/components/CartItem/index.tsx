import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addItem, minusItem, removeItem } from '../../redux/cart/slice';
import { CartItem as CartItemType } from '../../redux/cart/types';
import { IconCancel, IconMinus, IconPlus } from '../icons';

type CartItemProps = {
  id: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  type,
  size,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = useCallback(() => {
    dispatch(addItem({ id } as CartItemType));
  }, [dispatch, id]);

  const onClickMinus = useCallback(() => {
    dispatch(minusItem(id));
  }, [dispatch, id]);

  const onClickRemove = useCallback(() => {
    dispatch(removeItem(id));
  }, [dispatch, id]);

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className='cart__item-wrapper'>
        <div className='cart__item-count'>
          <button
            disabled={count === 1}
            onClick={onClickMinus}
            className='button button--outline button--circle cart__item-count-minus'>
            <IconMinus />
          </button>
          <b>{count}</b>
          <button
            onClick={onClickPlus}
            className='button button--outline button--circle cart__item-count-plus'>
            <IconPlus />
          </button>
        </div>
        <div className='cart__item-price'>
          <b>{price * count} ₽</b>
        </div>
        <div className='cart__item-remove'>
          <div onClick={onClickRemove} className='button button--outline button--circle'>
            <IconCancel />
          </div>
        </div>
      </div>
    </div>
  );
};
