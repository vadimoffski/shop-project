
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
window.addEventListener('scroll', showModalByScroll);

function showModalByScroll(){
  if(window.pageYOffset >= document.body.scrollHeight/2){
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

// change quality program
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");
let minCount = 1;
let maxCount = 5;

function toggleButtonsState(count, decrementBtn, incrementBtn){
  decrementBtn.disabled = count <= minCount;
  incrementBtn.disabled = count >= maxCount;
}

quantityInput.forEach((item, i) =>
  toggleButtonsState(item.value, decrementBtns[i], incrementBtns[i])
);

incrementBtns.forEach((item, i) => item.addEventListener("click", function() {
  let currentValue = +quantityInput[i].value;
  let nextValue = currentValue + 1;
  quantityInput[i].value = nextValue;
  toggleButtonsState(nextValue, decrementBtns[i], item);
}));

decrementBtns.forEach((item, i) => item.addEventListener("click", function () {
  let currentValue = +quantityInput[i].value;
  let nextValue = currentValue - 1;
  quantityInput[i].value = nextValue;
  toggleButtonsState(nextValue, decrementBtns[i], item);
}));

//slider slick
$(".slider-block").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
});



