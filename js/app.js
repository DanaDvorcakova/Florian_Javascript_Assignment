let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'RED ROSES BOUQUET',
        image: '1.png',
        currency: 'Euro',
        price: 120,
    },
    {
        id: 2,
        name: 'FLOWER BOUQUET - 11 TULIPS',
        image: '2.png',
        currency: 'Euro',
        price: 80
    },
    {
        id: 3,
        name: 'CLOUDS OF HEAVEN BOUQUET',
        image: '3.png',
        currency: 'Euro',
        price: 220
    },
    {
        id: 4,
        name: 'SUMMER SUNSHINE BOUQUET',
        image: '4.png',
        currency: 'Euro',
        price: 230
    },
    {
        id: 5,
        name: 'FLORAL BOUQUET',
        image: '5.png',
        currency: 'Euro',
        price: 220
    },
    {
        id: 6,
        name: 'SEASONAL BRIGHT BOUQUET',
        image: '6.png',
        currency: 'Euro',
        price: 85
    },
    {
        id: 7,
        name: 'BROOKLYN BOUQUET',
        image: "7.png",
        currency: 'Euro',
        price: 120,
    },
    {
        id: 8,
        name: 'GOODNESS BOUQUET',
        image: '8.png',
        currency: 'Euro',
        price: 90
    },
    {
        id: 9,
        name: 'ECLAT ROUND BOUQUET',
        image: '9.png',
        currency: 'Euro',
        price: 220
    },

        {
        id: 10,
        name: 'ROUND GREEN BOUQUET',
        image: "10.png",
        currency: 'Euro',
        price: 120,
    },
    {
        id:11,
        name: 'PURPLE ARRANGEMENT',
        image: '11.png',
        currency: 'Euro',
        price: 80
    },
    {
        id: 12,
        name: 'FLORAL DREAMS',
        image: '12.png',
        currency: 'Euro',
        price: 220
    },
];

let listCarts = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}" />
            <div class="title">${value.name}</div>
            <div class="currency">${value.currency}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCart(key) {
    if (listCarts[key] == null) {
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    } else {
        listCarts[key].quantity += 1;
    }
    reloadCart();
}

function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCarts.forEach((value, key) => {
        if (value != null) {
           
            const totalPriceItem = value.price * value.quantity;
            totalPrice += totalPriceItem;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <img src="image/${value.image}" />
                <div>${value.name}</div>
                <div>${value.currency}</div>
                <div>${ totalPriceItem.toLocaleString()}</div> <!-- Display price for quantity -->
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCart.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
    if (newQuantity <= 0) {
        
        delete listCarts[key];
    } else {
       
        listCarts[key].quantity = newQuantity;
    }
    
    // Recalculate prices and reload the cart
    reloadCart();
}























