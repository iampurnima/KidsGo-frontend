import React, { useState } from "react";
import "./css/Cart.css";

const cartItems = [
    {
        id: 1,
        name: "Doll Cart",
        brand: "Nepali Brand",
        price: "$25.00",
        imageUrl: "/images/doll2.png",
        quantity: 1,
    },
    {
        id: 2,
        name: "Frock",
        brand: "Gucci",
        price: "$20.00",
        imageUrl: "/images/frock2.png",
        quantity: 2,
    },
];

function Cart() {
    const [items, setItems] = useState(cartItems);

    const handleQuantityChange = (id, newQuantity) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="cartContainer">
            <h2>Your Cart</h2>
            <div className="cartItems">
                {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    items.map(item => (
                        <div key={item.id} className="cartItem">
                            <img src={item.imageUrl} alt={item.name} className="cartItemImage" />
                            <div className="cartItemDetails">
                                <h3 className="cartItemName">{item.name}</h3>
                                <p className="cartItemBrand">{item.brand}</p>
                                <p className="cartItemPrice">{item.price}</p>
                                <div className="cartItemActions">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        className="quantityInput"
                                    />
                                    <button onClick={() => handleRemoveItem(item.id)} className="removeButton">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {items.length > 0 && (
                <div className="cartSummary">
                    <h3>Cart Summary</h3>
                    <p><strong>Total:</strong> ${calculateTotal()}</p>
                    <button className="checkoutButton">Checkout</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
