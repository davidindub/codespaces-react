const shoppingCart = [
    {id: 1, product: "HDMI Cable", price: 6},
    {id: 2, product: "Wireless Mouse", price: 40},
    {id: 3, product: "Headset", price: 75},
]

console.log(shoppingCart);

// Adding to an array
const newCart = [...shoppingCart, { id: 4, product: "Coffee mug", price: 10}];

// Removing an element
shoppingCart.filter((item) => item.id !== 2);

console.log(shoppingCart.filter((item) => item.id !== 2));


// Updating all elements in an array
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    }
})

// Modifying a particular element in an array
shoppingCart.map((item) => {
    if (item.id === 3) {
        return { ...item, price: 10.99 };
    } else {
        return item;
    }
})
// { id: 3, product: "Headset", price: 10.99 }


