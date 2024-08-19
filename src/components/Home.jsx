import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './css/Home.css'; 

const products = [
  {
    id: 1,
    name: "Doll Cart",
    brand: "Nepali Brand",
    price: "$25.00",
    imageUrl: "./images/doll2.png"
  },
  {
    id: 2,
    name: "Frock",
    brand: "Gucci",
    price: "$20",
    imageUrl: "./images/frock2.png"
  },
  {
    id: 3,
    name: "Story Books",
    brand: "Nepali Writer",
    price: "$20",
    imageUrl: "./images/books.png"
  },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <div className="homeContainer">
        <header className="heroSection">
          <div className="heroContent">
            <h1 className="display">Welcome to KidsZone's Second-Hand Marketplace</h1>
            <p className="notice">Find the best deals on kids' items like doll carts, clothes, books, and more!</p>
            <div className="buttonContainer">
              <Link to="/login">
                <button className="homeButton">Login</button>
              </Link>
              <Link to="/profile">
                <button className="homeButton">Profile</button>
              </Link>
            </div>
          </div>
        </header>
        <form onSubmit={handleSearchSubmit} className="searchForm">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for items"
            className="searchInput"
          />
          <button type="submit" className="searchButton">Search</button>
        </form>
      </div>
      <div className="productContainer">
        {products.map(product => (
          <div key={product.id} className="productCard">
            <img src={product.imageUrl} alt={product.name} className="productImage" />
            <h3 className="productName">{product.name}</h3>
            <p className="productBrand">{product.brand}</p>
            <p className="productPrice">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
