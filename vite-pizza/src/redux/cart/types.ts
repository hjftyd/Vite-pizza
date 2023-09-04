export type CartItem = {
  id: string;
  type: string;
  size: number;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
