import React from "react";
import PlantCard from "./PlantCard";

function PlantList({allPlants, removeAPlant, remove, setRemove}) {
  return (
    <ul className="cards">{
      allPlants.map(plant => <PlantCard 

        key = {plant.id }
        id = { plant.id }
        name = { plant.name }
        image = { plant.image }
        price = { plant.price }
        removeAPlant = {removeAPlant}
        remove = {remove} 
        setRemove = {setRemove}/>

    )



    }</ul>
  );
}

export default PlantList;
