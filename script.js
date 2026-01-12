
const addBtn = document.querySelectorAll(".btn-add");

const cartItems = document.getElementById("cart-items");

const totalPrice = document.getElementById("total-price");

const deleteBtn = document.getElementById("btn-clean");

let total = 0 ;





deleteBtn.addEventListener("click", () => {

totalPrice.innerText = 0;

cartItems.replaceChildren();

} );

addBtn.forEach((btns) =>{


          btns.addEventListener("click",()=>{

                    const newItem = document.createElement("li");

                    newItem.innerText = `${btns.dataset.name} - $${btns.dataset.price}`;
                    console.log(newItem);
                    cartItems.appendChild(newItem);

                    total += Number(btns.dataset.price);

totalPrice.innerText = total;


                    console.log(total)


          });

})