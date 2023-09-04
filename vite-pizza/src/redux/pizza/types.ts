export type Pizza = {
  id: string;
  title: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
  category: string;
  imageUrl: string;
  description: string;
};

export enum Status {
  ERROR = 'error',
  LOADING = 'loading',
  SUCCESS = 'success',
}

export type FetchPizzasArgs = {
  order?: string;
  limit?: number;
  sortBy?: string;
  categoryId?: number;
  currentPage?: number;
  searchValue?: string;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
  countItems: number;
}

export type FetchPizzasAnswer = {
  count: number;
  pizzas: Pizza[];
};
