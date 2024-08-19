import React from "react";
import './css/BrowseCategory.css';

const categories = [
    {
        id: 1,
        name: "Clothes",
        description: "Find a wide range of gently used clothes for kids of all ages.",
        image: "./images/babycloth.png"
    },
    {
        id: 2,
        name: "Toys",
        description: "Explore a variety of toys that will keep your kids entertained for hours.",
        image: "./images/toy.png"
    },
    {
        id: 3,
        name: "Books",
        description: "Discover books that will inspire and educate your little ones.",
        image: "./images/babybook.png"
    },
    {
        id: 4,
        name: "Furniture",
        description: "Browse furniture that is perfect for your child’s room.",
        image: "./images/babyTable.webp"
    },
    {
        id: 5,
        name: "Strollers",
        description: "Find strollers that are both practical and affordable.",
        image: "./images/stroller.png"
    },
    {
        id: 6,
        name: "Accessories",
        description: "From hats to shoes, find all the accessories your child needs.",
        image: "./images/accessory.png"
    }
    // Add more categories as needed
];

function BrowseCategories() {
    return (
        <div className="categoriesContainer">
            <h2>Browse Categories</h2>
            <div className="categoriesGrid">
                {categories.map(category => (
                    <div key={category.id} className="categoryCard">
                        <img src={category.image} alt={category.name} className="categoryImage" />
                        <div className="categoryContent">
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                            <button className="browseButton">Browse {category.name}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BrowseCategories;
