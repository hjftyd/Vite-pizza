import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { pizzasApi } from '../../api';

import styles from './FullPizza.module.scss';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    description: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPizza = async () => {
      try {
        if (id) {
          const { data } = await pizzasApi.getPizzaById(id);
          setPizza(data);
        }
      } catch (error) {
        alert('Произошла ошибка при получении пиццы.');
        navigate('/');
      }
    };
    getPizza();
  }, [id, navigate]);

  if (!pizza) {
    return (
      <>
        <h2>Загрузка...</h2>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <img className={styles.img} src={pizza.imageUrl} alt='Full-Pizza' />
      <div className={styles.info}>
        <h2 className={styles.title}>{pizza.title}</h2>
        <p className={styles.desc}>
          <p>{pizza.description}</p>
        </p>
        <h4 className={styles.price}>{pizza.price} ₽</h4>
        <Link to='/'>
          <button className='button button--outline button--add'>
            <span>Назад</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FullPizza;
