"use strict";

let allTotal = 0;
let totalEl = document.querySelector(".total");

function addToCart(button) {
  let mainEl = button.closest(".product");
  let price = mainEl.querySelector(".price").innerText;
  let name = mainEl.querySelector("h4").innerText;
  let quantity = mainEl.querySelector("input").value;
  let cartItems = document.querySelector(".cart-items");

  if (quantity > 0) {
    let total = Number(price.slice(1)) * quantity;
    allTotal += total;

    cartItems.innerHTML += `<div class="cart-single-item"><h4>${name}</h4> ${price} x ${quantity} = 
                              $<span>${total}</span> <button onclick="removeFromCart(this)">Remove</button>
                             </div> `;

    totalEl.innerText = `Total: $${allTotal}`;
    button.innerText = "Added";
    button.setAttribute("disabled", "true");
  } else {
    alert("Quantity must be greater than 0");
  }
}

function removeFromCart(button) {
  let mainEl = button.closest(".cart-single-item");
  let price = mainEl.querySelector("div span").innerText;
  price = Number(price);
  let name = mainEl.querySelector("h4").innerText;
  let vegetables = document.querySelectorAll(".product");

  allTotal -= price;
  totalEl.innerHTML = `Total: $${allTotal}`;
  mainEl.remove();

  vegetables.forEach(function (vege) {
    let itemName = vege.querySelector(".name h4").innerText;

    if (name === itemName) {
      vege.querySelector(".amount input").value = 0;
      vege.querySelector(".amount button").removeAttribute("disabled");
      vege.querySelector(".amount button").innerText = "Add";
    }
  });
}
