import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage({allPlants, searchTerm, setSearchTerm, 
  addNewPlant, removeAPlant, remove, setRemove }) {

  return (
    <main>
      <NewPlantForm addNewPlant = {addNewPlant}/>
      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      <PlantList allPlants = {allPlants} 
      removeAPlant = {removeAPlant}
      remove = {remove} 
      setRemove = {setRemove}/>
    </main>
  );
}

export default PlantPage;
