fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(productos => {
        // Obtiene contenedor de productos
        const contenedorProductos = document.getElementById('contenedor-productos');

        // Itera sobre los productos y crea tarjetas para cada uno
        productos.forEach(producto => {
            // Crea elemento
            const productCard = document.createElement('div');
            productCard.classList.add('product-card'); // Agrega una clase CSS

            // Crea imagen
            const productImage = document.createElement('img');
            productImage.src = producto.image;
            productImage.alt = producto.title;

            // Crea título
            const productTitle = document.createElement('h2');
            productTitle.textContent = producto.title;

            // Crea precio
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${producto.price}`;

            // imagen, título y precio
            productCard.appendChild(productImage);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);

            //  tarjeta contenedor
            contenedorProductos.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });
