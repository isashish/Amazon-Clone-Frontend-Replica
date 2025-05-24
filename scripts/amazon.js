// In this lesson:
// 1. Started the final Amazon project
// 2. Set up and learned Git
// 3. Learned the main idea of JavaScript
//    1. Save the data
//    2. Generate the HTML
//    3. Make it interactive
// 4. Created list of products
// 5. Made the "Add to Cart" button interactive
// 6. Made the cart quantity interactive



// Main Idea of Java Script
//1. Save the data
//   data = information (information about our products)
//2. Generate the HTML
//3. Make it interactive


//The Benefit of Generating the HTML 
// 1. If we want to add the product in web we don't need to copy the code again and again

import {cart} from '../data/cart.js';

// 1. Put all imports at the top of the file.
// 2. We need to use Live Server


let productsHTML = '';


products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
   
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
 .forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        let matchingItem;

        cart.forEach((item) => {
            if (productId === item.productId){
                matchingItem = item
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


        let CartQuantity = 0;

        cart.forEach((item) => {
            CartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity')
            .innerHTML = CartQuantity;
    });
 });

//  How do we know which product to add?
// Data Attribute 
// - is just another HTML attribute
// - allows us to attach any information to an element

// Syntax for a Data Attribute
// -is just an HTML attribute
// attribute- name    attribute-value

// data-product-name="${product.name}"
//- have to start with "data-"
//- then give it any name


//Steps 
// - Check if the product is already in the cart.
// - If it is in the cart, increase the quantity.
// - If it is not in the cart, add it to the cart.

//Sometimes two products have the same name:-
// To fix this : - give each product an id
//               - this id should be unique


//Steps -
//       1. Calculate the quantity.
//       2. Put the quantity on the page.