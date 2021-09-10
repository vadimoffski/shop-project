
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
// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let quantityInput = document.querySelectorAll(".product-quantity input");
// let minCount = 1;
// let maxCount = 5;

// function toggleButtonsState(count, decrementBtn, incrementBtn){
//   decrementBtn.disabled = count <= minCount;
//   incrementBtn.disabled = count >= maxCount;
// }



//slider slick
$(".slider-block").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
});

// ----------COUNTER FUNCTION CONSTRUCTOR----------------------------
// let audi = {
//   year:"2013",
//   model:"A4",
//   color:"black",
// }

// let bmw = {
//   year:"2011",
//   model:"328",
//   color:"grey",
// }

// function Car(year, model, color){
//   this.year = year;
//   this.model = model;
//   this.color = color;
// }

// let audi = new Car("2014", "A4", "black");
// console.log(audi);

//Calculator
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField, minCount=1, maxCount=5){
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonsState = function(){
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
  };
  
  this.toggleButtonsState();

  this.increment = function() {
    let currentValue = +this.domRefs.inputField.value;
    let nextValue = currentValue + 1;
    this.domRefs.inputField.value = nextValue;
    this.toggleButtonsState();
  };
  
  this.decrement = function() {
    let currentValue = +this.domRefs.inputField.value;
    let nextValue = currentValue - 1;
    this.domRefs.inputField.value = nextValue;
    this.toggleButtonsState();
  };

  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

// const counter = new Counter(incrementBtns, decrementBtns, quantityInput);
// console.log(counter);

let counters = [];

quantityInput.forEach((countItem, i) => (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], countItem)));
