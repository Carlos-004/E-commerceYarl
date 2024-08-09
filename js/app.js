const productos = [
    {
        id: 1,
        nombre: "Super Bike",
        precio: 120.00,
        descripcion: "Una bicicleta de alta calidad para aventuras al aire libre.",
        imagen: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        nombre: "Bonsai",
        precio: 40.00,
        descripcion: "Un bonsai decorativo para embellecer tu hogar.",
        imagen: "https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        nombre: "Desk",
        precio: 100.00,
        descripcion: "Un escritorio de madera ideal para trabajar o estudiar.",
        imagen: "https://images.pexels.com/photos/7181188/pexels-photo-7181188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        nombre: "Picture",
        precio: 60.00,
        descripcion: "Un cuadro decorativo para dar estilo a tu habitación.",
        imagen: "https://images.pexels.com/photos/2320621/pexels-photo-2320621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        nombre: "Coffee Maker",
        precio: 20.00,
        descripcion: "Una cafetera compacta y eficiente para tu cocina.",
        imagen: "https://images.pexels.com/photos/4993062/pexels-photo-4993062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        nombre: "Super Bike",
        precio: 120.00,
        descripcion: "Una bicicleta de alta calidad para aventuras al aire libre.",
        imagen: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 7,
        nombre: "Bonsai",
        precio: 40.00,
        descripcion: "Un bonsai decorativo para embellecer tu hogar.",
        imagen: "https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 8,
        nombre: "Desk",
        precio: 100.00,
        descripcion: "Un escritorio de madera ideal para trabajar o estudiar.",
        imagen: "https://images.pexels.com/photos/7181188/pexels-photo-7181188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 9,
        nombre: "Picture",
        precio: 60.00,
        descripcion: "Un cuadro decorativo para dar estilo a tu habitación.",
        imagen: "https://images.pexels.com/photos/2320621/pexels-photo-2320621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 10,
        nombre: "Coffee Maker",
        precio: 20.00,
        descripcion: "Una cafetera compacta y eficiente para tu cocina.",
        imagen: "https://images.pexels.com/photos/4993062/pexels-photo-4993062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

const buscarInfo = document.querySelector("#productos")
const myProductContainer = document.querySelector(".card-container");
const shoppingCardContainer = document.querySelector(".shpng-cart-container");
const asideContainer = document.querySelector(".shpng-cart-content");
const shoppincontent = document.querySelector(".shpng-cart-products");

const card = document.querySelector(".nav-bar-cart");
const notificacion = document.querySelector(".nav-bar-cart-quantity");

const carrito = [];
console.log(carrito)

const productDetails = document.querySelector(".product-details")

card.addEventListener("click",() =>{
    if (!shoppingCardContainer.classList.contains("activo")) {
        shoppingCardContainer.classList.add("activo")
    }else if (shoppingCardContainer.classList.contains("activo")) {
        shoppingCardContainer.classList.remove("activo")
    }
})

function myProduct(productosFiltrados){
    myProductContainer.innerHTML = "";

    productosFiltrados.forEach(data =>{

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const cardImg = document.createElement("img");
        cardImg.classList.add("product-img");
        cardImg.setAttribute("src",`${data.imagen}`);
        cardImg.setAttribute("alt",`${data.nombre}`);
        productCard.append(cardImg);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        productCard.append(productInfo);

        const divCard = document.createElement("div");
        divCard.classList.add("product-info");
        divCard.classList.add("product-direcion")
        productInfo.append(divCard);

        const precio = document.createElement("p")
        precio.classList.add("product-price");
        precio.innerText = `$${data.precio.toFixed(2)}`;
        divCard.append(precio);

        const nombre = document.createElement("p");
        nombre.classList.add("product-title");
        nombre.innerText = `${data.nombre}`;
        divCard.append(nombre)

        const figure = document.createElement("figure");
        figure.classList.add("add-to-cart-button");
        productInfo.append(figure);

        const iconImg = document.createElement("img");
        iconImg.setAttribute("src","/icons/bt_add_to_cart.svg");
        iconImg.addEventListener("click", () => cartProduct(data.id))
        figure.append(iconImg)

        myProductContainer.append(productCard);
    })
}

function buscarProductos(){
    buscarInfo.addEventListener("input",()=>{
        const nombreProduct = buscarInfo.value.toLowerCase();
        const productosFiltrados = productos.filter(dataFiltrada =>
            dataFiltrada.nombre.toLowerCase().includes(nombreProduct)
        )
        myProduct(productosFiltrados);
    })
}

function cartProduct(ID){
    const ShoppingProducto = productos.find(index => index.id === ID);
    carrito.push(ShoppingProducto);
 
    const shoppingProduct = document.createElement("div");
    shoppingProduct.classList.add("shpng-cart-product");

    const shoppingFigure = document.createElement("figure");
    shoppingFigure.classList.add("shpng-cart-product-image");
    shoppingProduct.append(shoppingFigure);

    const shoppingImg = document.createElement("img");
    shoppingImg.setAttribute("src",`${ShoppingProducto.imagen}`);
    shoppingImg.setAttribute("alt",`${ShoppingProducto.nombre}`);
    shoppingImg.addEventListener("click",() => descripcionProduct(ShoppingProducto.id));
    shoppingFigure.append(shoppingImg);

    const shoppingName = document.createElement("p");
    shoppingName.classList.add("hpng-cart-product-title");
    shoppingName.innerText =  `${ShoppingProducto.nombre}`;
    shoppingProduct.append(shoppingName);

    const shoppingPrecio = document.createElement("p");
    shoppingPrecio.classList.add("shpng-cart-product-price");
    shoppingPrecio.innerText = `$${ShoppingProducto.precio.toFixed(2)}`
    shoppingProduct.append(shoppingPrecio);

    const figureContainer = document.createElement("figure");
    figureContainer.classList.add("shpng-cart-product-delete");
    shoppingProduct.append(figureContainer);

    const imgClose = document.createElement("img");
    imgClose.setAttribute("src",`/icons/icon_close.png`);
    figureContainer.append(imgClose);

    shoppincontent.append(shoppingProduct);
    console.log(shoppincontent)

    notificacion.innerHTML = `${ShoppingProducto.length}`
    conteoTotal()
}

function conteoTotal(){
    const sumaTotal = carrito.reduce((suma,producto) => suma + producto.precio,0)
    const containerTotal = document.createElement("div");
    containerTotal.classList.add("shpng-cart-caracteristics");

    const descripcionTotal = document.createElement("p");
    descripcionTotal.classList.add("shpng-cart-description");
    descripcionTotal.innerText = "Total";
    containerTotal.append(descripcionTotal)

    const precioTotal = document.createElement("p");
    precioTotal.classList.add("shpng-cart-total");
    precioTotal.innerText = `$${sumaTotal.toFixed(2)}`;
    containerTotal.append(precioTotal)

    const botonCheckout = document.createElement("button");
    botonCheckout.classList.add("primary-button");
    botonCheckout.innerText = "Checkout";

    asideContainer.innerHTML = "";
    asideContainer.append(containerTotal);
    asideContainer.append(botonCheckout);

    notificacion.innerHTML = `${carrito.length}`
}

function descripcionProduct(ID){

    const descripcionFind = productos.find(index => index.id === ID);
    
    const productDetailsContainer = document.createElement("div");
    productDetailsContainer.classList.add("product-details-img-content");

    const containerImgClose = document.createElement("div");
    containerImgClose.classList.add("product-details-img-close");

    const iconImgClose  = document.createElement("img");
    iconImgClose.setAttribute("src","/icons/icon_close.png");
    iconImgClose.classList.add("img");
    containerImgClose.append(iconImgClose);
    productDetailsContainer.append(containerImgClose);

    const imgDescriptcion = document.createElement("img");
    imgDescriptcion.classList.add("product-details-img");
    imgDescriptcion.setAttribute("src",`${descripcionFind.imagen}`);
    productDetailsContainer.append(imgDescriptcion);

    const productDetailsInfo = document.createElement("div");
    productDetailsInfo.classList.add("product-details-info");

    const productDetailsPrice = document.createElement("p");
    productDetailsPrice.classList.add("product-details-price");
    productDetailsPrice.innerText = `$${descripcionFind.precio.toFixed(2)}`;
    productDetailsInfo.append(productDetailsPrice)

    const titulo = document.createElement("p");
    titulo.classList.add("product-details-title");
    titulo.innerText = `${descripcionFind.nombre}`;
    productDetailsInfo.append(titulo);

    const descripcionInfo = document.createElement("p");
    descripcionInfo.classList.add("product-details-description");
    descripcionInfo.innerText = `${descripcionFind.descripcion}`;
    productDetailsInfo.append(descripcionInfo);

    
    const botonAddToCard = document.createElement("button");
    botonAddToCard.classList.add("primary-button");
    botonAddToCard.innerText = "Add to cart";

    const carritoImg = document.createElement("img");
    carritoImg.setAttribute("src","/icons/white-shopping-cart-icon.jpg");
    botonAddToCard.append(carritoImg);
    productDetailsInfo.append(botonAddToCard);

    productDetails.append(productDetailsContainer);
    productDetails.append(productDetailsInfo);
}

buscarProductos();
myProduct(productos);

