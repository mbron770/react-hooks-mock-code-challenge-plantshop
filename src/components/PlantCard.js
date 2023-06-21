import React, { useState } from "react";

function PlantCard({
  id,
  name,
  image,
  price,
  removeAPlant,
  remove,
  setRemove,
}) {
  const [isInStock, setIsInStock] = useState(true);
  const URL = "http://localhost:6001/plants";

  function updateStock() {
    setIsInStock((isInStock) => !isInStock);
  }

  function handleDeleteClick() {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then(removeAPlant({ id }));
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={updateStock}>
          In Stock
        </button>
      ) : (
        <button onClick={updateStock}>Out of Stock</button>
      )}

      <button onClick={handleDeleteClick}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
