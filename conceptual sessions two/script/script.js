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
