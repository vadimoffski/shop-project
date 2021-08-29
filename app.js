let productsCountEl = document.querySelector(".products-counts");

let addToCartBtns = document.querySelectorAll(".btn-add-cart");

addToCartBtns.forEach((item) =>
    item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent+1;
  })
);

let likeBtns = document.querySelectorAll(".like");
likeBtns.forEach((item) =>
  item.addEventListener('click', function(){
  this.classList.toggle('likeClicked');
  })
);



// // change quality program
// let decrementBtns = document.querySelectorAll(".decrement-button")[0];
// let incrementBtns = document.querySelectorAll(".increment-button")[0];
// let quantityInput = document.querySelectorAll(".product-quantity input")[0];

// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(quantityInput);

// incrementBtns.addEventListener("click", function () {
//     // quantityInput.value = +quantityInput.value + 1;
//     let currentValue = +quantityInput.value;
//     let nextValue = currentValue + 1;
//     quantityInput.value = nextValue;
    
//     if (nextValue <= 1) {
//         decrementBtns.disabled = true;
//       } else {
//         decrementBtns.disabled = false;
//       }
//   });
// decrementBtns.addEventListener("click", function () {
//     // quantityInput.value = +quantityInput.value + 1;
//     let currentValue = +quantityInput.value;
//     let nextValue = currentValue - 1;
//     quantityInput.value = nextValue;

//     if (nextValue <= 1) {
//         decrementBtns.disabled = true;
//       } else {
//         decrementBtns.disabled = false;
//       }
//   });


