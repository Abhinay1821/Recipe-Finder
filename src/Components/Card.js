import React from 'react';
import '../App.css'; // Assuming you are using an external CSS file for styles

export default function Card({ dataObj }) {
    return (
        <div className="card-container">
            <div className="upper-container">
                <img src={dataObj.image} alt={dataObj.name} className="card-image" />
                <div className="card-details">
                    <h3 className="card-title">{dataObj.name}</h3>
                    <h4>Cuisine: <span>{dataObj.cuisine}</span></h4>
                    <h4>Difficulty: <span>{dataObj.difficulty}</span></h4>
                    <h4>Meal Type: <span>{dataObj.mealType}</span></h4>
                </div>
            </div>
            <div className="card-lower">
                <p className="ingredients">Ingredients:</p>
                <ul className="ingredient-list">
                    {dataObj.ingredients.map((val, index) => (
                        <li key={index} className="ingredient-item">{val}</li>
                    ))}
                </ul>
                <h5 className="rating">Rating: {dataObj.rating}</h5>
            </div>
        </div>
    );
}
