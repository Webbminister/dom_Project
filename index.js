const heartButton = document.getElementById("heart_btn");
const countIncrease = document.getElementById("increase");
const countDecrease = document.getElementById("decrease");
// const totalAmount = document.getElementById("total-amt")
// like button reaction
heartButton.addEventListener("click", function () {
    heartButton.classList.add("heart");
    } )


countIncrease.addEventListener("click", function() {
    const aggregate = document.querySelector("#aggregate");
    const itemPrice = document.querySelector("#price");
    let quantity = document.querySelector("#count");
    const subAmount = document.querySelector("#total-amt")
    const result = Number(quantity.innerText) + 1;
     quantity.innerText = result;
    
     const newPrice= Number(itemPrice.textContent);
     const newAmount = newPrice * result;
subAmount.innerText = newAmount;
aggregate.textContent = newAmount
     console.log(Number(newAmount));
     

 })
// decreasing of price
countDecrease.addEventListener("click", function(){
    const aggregate = document.querySelector("#aggregate");
    const itemPrice = document.querySelector("#price");
    const subAmount = document.querySelector("#total-amt")
    let quantity = document.querySelector("#count");
    let result = Number(quantity.innerText) - 1;
    quantity.innerText = result ;

    const newPrice= Number(itemPrice.textContent);
     const newAmount = (newPrice * result);
     subAmount.innerText = newAmount;
     console.log(Number(newAmount));

     aggregate.textContent = newAmount;

    if(result < 0 || subAmount.innerText === 0){
        subAmount.innerText = 0;
        quantity.innerText = 0;
        aggregate.textContent = 0;
    }
        


});
