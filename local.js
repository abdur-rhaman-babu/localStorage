const addProduct = () =>{
    const productField = document.getElementById('productField')
    const quantityField = document.getElementById('quantityField')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity)
    saveProductToLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li)
}

const getProductFromLocalStorage = () =>{
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if ( storedCart ){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getProductFromLocalStorage();
    cart[product] = quantity;
    const cartStringyfied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringyfied)
}

const displayProductFromLocalStorage = () =>{
    const savedCart = getProductFromLocalStorage()
    console.log(savedCart)
    for (const product in savedCart){
        const quantity = savedCart[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}

displayProductFromLocalStorage()