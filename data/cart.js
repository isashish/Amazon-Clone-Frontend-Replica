import {products} from "./products.js";

export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
    },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
    }];
}

//Whenever we update the cart, we need to save it to localStorage
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
  let matchingItem;

        cart.forEach((CartItem) => {
            if (productId === CartItem.productId){
                matchingItem = CartItem
            }
        });

        if (matchingItem){
            matchingItem.quantity += 1;
        }

        else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

    saveToStorage();
}

// Steps:-
// 1. Create a new array
// 2. Loop through the cart
// 3. Add each product to the new array, except for this productId
export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
}