export enum SortPropertyEnum {
  RATING = 'Популярности',
  ALPHABET = 'от А до Я',
  REVERSE_ALPHABET = 'от Я до А',
  EXPENSIVE = 'По убыванию цены',
  CHEAP = 'По возрастанию цены',
}

export enum sortBy {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

export enum sortOrder {
  DESC = 'desc',
  ASC = 'asc',
}

export type SortItem = {
  name: SortPropertyEnum;
  order: sortOrder;
  sortBy: sortBy;
};

export interface FilterSliceState {
  sort: SortItem;
  categoryId: number;
  currentPage: number;
  searchValue?: string;
}
