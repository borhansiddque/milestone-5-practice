document.getElementById('productAddBtn').addEventListener('click', function () {
    const productName = document.getElementById('productName').value;
    const productImage = document.getElementById('productImage').value;
    const productPrice = document.getElementById('productPrice').value;
  
    
    const allProductList = document.getElementById('allProductList');

    const addProductContainer = document.createElement('div');
    addProductContainer.classList.add('p-4');
    addProductContainer.classList.add('bg-red-300');
    addProductContainer.innerHTML = `
        <h1>${productName}</h1>
        <img src=${productImage} alt="Product Image">
        <p>${productPrice}</p>
    `
    allProductList.appendChild(addProductContainer);
})