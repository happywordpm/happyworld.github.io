const btnCart = document.querySelector('.fas.fa-shopping-cart');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});



const cartInfo = document.querySelector('.cart-product')
const rowPrduct = document.querySelector('.row-product')

//Lista de todos los contenedores de productos
const productsLista = document.querySelector('.container-products')

//vaiable de arreglos de productos

let allProdcts = []

// ...

productsLista.addEventListener('click', e => {
    if (e.target.classList.contains('add-cart')) {
        const product = e.target.parentElement.parentElement; // Ajuste aquí

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h3').textContent, // Ajuste aquí
            price: product.querySelector('.price').textContent // Ajuste aquí
        };

        const exits = allProdcts.some(product => product.title === infoProduct)

        allProdcts = [...allProdcts, infoProduct];

        showHTML();
    }
});

// ...


//FUNCION PARA MOSTRAR HTML

const totalPagarElement = document.querySelector('.total-pagar');

// ...

// Función para actualizar la suma total
const updateTotal = () => {
    const total = allProdcts.reduce((acc, product) => {
        const price = parseFloat(product.price.replace('$', '').replace(',', '')); // Convierte el precio a número
        return acc + price * product.quantity;
    }, 0);

    totalPagarElement.textContent = `$${total.toFixed(2)}`;
};
const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};
// ...

// Actualiza la suma total al mostrar el HTML
const showHTML = () => {
    rowPrduct.innerHTML = '';

    allProdcts.forEach((product, index) => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <div class="span cantidad-producto-carrito">${product.quantity}
                    <p class="titulo-producto--carrito">${product.title}</p>
                    <span class="precio-producto-carrito">${product.price}</span>
                </div>
                <button class="remove-product" data-index="${index}">Eliminar</button>
            </div>
    
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="close">
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M6 18L18 6M6 6l12 12" 
                />
            </svg>
        `;

        rowPrduct.append(containerProduct);
    });

    updateTotal();
};

// ...

// Evento para eliminar un producto del carrito
rowPrduct.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-product')) {
        const indexToRemove = e.target.dataset.index;
        allProdcts.splice(indexToRemove, 1);
        showHTML();
    }
});

// ...