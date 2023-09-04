import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Pizza, PizzaSliceState, Status, FetchPizzasAnswer, FetchPizzasArgs } from './types';
import { pizzasApi } from '../../api';

const initialState: PizzaSliceState = {
  items: [],
  countItems: 0,
  status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<FetchPizzasAnswer, FetchPizzasArgs>(
  'pizza/fetchPizzas',
  async (params) => {
    const { sortBy, order, categoryId, searchValue, currentPage, limit } = params;
    const { data } = await pizzasApi.getPizzas({
      currentPage,
      categoryId,
      sortBy,
      limit,
      order,
      searchValue: searchValue?.trim(),
    });
    return data;
  },
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload.pizzas;
      state.countItems = action.payload.count;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
      state.countItems = 0;
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
