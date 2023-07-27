const heartButton = document.getElementById("heart");
const countIncrease = document.getElementById("increase");
const countDecrease = document.getElementById("decrease");
// const totalAmount = document.getElementById("total-amt")
// like button reaction
heartButton.addEventListener("click", function () {
    heartButton.style.color = "blue";
    heartButton.style.width ="30px";
} )

//create a counter for quantity
//create a click button for counter



countIncrease.addEventListener("click", function() {
    const itemPrice = document.querySelector("#price");
    let quantity = document.querySelector("#count");
    const subAmount = document.querySelector("#total-amt")
    const result = Number(quantity.innerText) + 1;
     quantity.innerText = result;
    
     const newPrice= Number(itemPrice.textContent);
     const newAmount = newPrice * result;
subAmount.innerText = newAmount;
     console.log(Number(newAmount));
     

})

countDecrease.addEventListener("click", function(){
    const itemPrice = document.querySelector("#price");
    const subAmount = document.querySelector("#total-amt")
    let quantity = document.querySelector("#count");
    let result = Number(quantity.innerText) - 1;
    quantity.innerText = result ;

    const newPrice= Number(itemPrice.textContent);
     const newAmount = (newPrice * result);
     subAmount.innerText = newAmount;
     console.log(Number(newAmount));

    if(result < 0 || subAmount.innerText === 0){
        subAmount.innerText = 0;
        quantity.innerText = 0;
    }
        


});
