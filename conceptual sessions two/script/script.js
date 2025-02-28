const ringButtons = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringButtons.length; i++) {
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener('click', function (event) {
        const name = event.target.id;
        const colorName = name.split('-');
        
        for (let j = 0; j < ringButtons.length; j++) {
            ringButtons[j].classList.remove('border-purple-700');
            ringButtons[j].classList.add('border-gray-300');
        }

        event.target.classList.add('border-purple-700');

        const productImage = document.getElementById('product-image');
        productImage.src = `./images/${colorName[0]}.png`;
    });

}


function selectWristSize(giveSize) {
    const sizes = ["S", "M", "L", "XL"];
    for(const size of sizes) {
        const button = document.getElementById('size-'+ size);
        if (size === giveSize) {
            button.classList.add("border-purple-600");
        } else {
            button.classList.remove("border-purple-600");
        }
    }
    
}


const quantityElements = document.querySelectorAll('.quantity-button');
for(let btn of quantityElements) {
    btn.addEventListener('click', function (event) {
        const amount = event.target.innerText === "+" ? 1 : -1;
        const quantityElement = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement.innerText);
        const newQuantity = Math.max(0, currentQuantity + amount);
        quantityElement.innerText = newQuantity;
        
    });
    
}


document.getElementById('add-to-cart').addEventListener('click', function () {
    document.getElementById('checkout-container').classList.remove('hidden');
})