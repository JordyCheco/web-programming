import type { products } from "../types/products";
export interface CartItem {
  quantity: number;
  product: products;
}

const cart = reactive([] as CartItem[]);

export function addProductToCart(product: products, quantity: number = 1) {
  const cartItem = cart.find((item) => item.product.id === product.id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      quantity,
      product,
    });
  }
}

export function updateProductQuantity(id: number, quantity: number) {
  const cartItem = cart.find((item) => item.product.id === id);
  if (cartItem) {
    cartItem.quantity = quantity;
    if (cartItem.quantity <= 0) {
      cart.splice(cart.indexOf(cartItem), 1);
    }
  }
}

export default cart;
