import React from 'react';

import ReactPagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
  count: number;
};

export const Pagination: React.FC<PaginationProps> = ({ onChangePage, currentPage, count }) => (
  <ReactPagination
    showTitle={false}
    className={styles.pagination}
    onChange={onChangePage}
    current={currentPage}
    total={count}
    defaultPageSize={4}
  />
);
