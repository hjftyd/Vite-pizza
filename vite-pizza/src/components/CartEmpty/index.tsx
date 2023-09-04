import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className='cart cart--empty'>
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>Чтобы заказать пиццу, перейдите на главную страницу.</p>
    <img src={cartEmptyImg} alt='Empty cart' />
    <Link to='/' className='button button--black'>
      <span>Вернуться назад</span>
    </Link>
  </div>
);
