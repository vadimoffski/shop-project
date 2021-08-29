
//add to cart
let productsCountEl = document.querySelector(".products-counts");
let addToCartBtns = document.querySelectorAll(".btn-add-cart");
addToCartBtns.forEach((item) =>
    item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent+1;
  })
);
//change like btns
let likeBtns = document.querySelectorAll(".like");
likeBtns.forEach((item) =>
  item.addEventListener('click', function(){
  this.classList.toggle('likeClicked');
  })
);
//modal
let moreDetailsBtns = document.querySelectorAll('.btn-more-details');
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach(item => item.addEventListener('click', openModal));

btnClose.addEventListener('click', closeModal);

modal.addEventListener("click", function(e){
  if (e.target === modal){
    closeModal();
  }
});
function openModal(){
  modal.classList.add('show');
  modal.classList.remove('hide');
}
function closeModal(){
  modal.classList.add('hide');
  modal.classList.remove('show');
}

//scroll
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
console.log('Полная высота документа с прокручиваемой частью: ' + scrollHeight);//2975px

console.log('Текущая прокрутка сверху: ' + window.pageYOffset);//650

window.addEventListener('scroll', scrollToModal);

function scrollToModal(){
  if (window.pageYOffset >= 500 && window.pageYOffset < 900){
    openModal();
  } else{
    closeModal();
  }
}




// ...closeModal..
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


