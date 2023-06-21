import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const URL = 'http://localhost:6001/plants'
  const [searchTerm, setSearchTerm] = useState('')
  
  const [remove, setRemove] = useState('')

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(plants => setPlants(plants))
    .catch(error => alert(error.message))
  }, [])

  
  const allPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))


  function addNewPlant(newPlantInfo){
    setPlants([...allPlants, newPlantInfo])
  }

  function removeAPlant(toBeRemoved){
    setPlants(allPlants.filter(plant => plant.id !== toBeRemoved.id))
  }

  return (
    <div className="app">
      <Header />
      <PlantPage 
      allPlants = {allPlants} 
      searchTerm = {searchTerm} 
      setSearchTerm = {setSearchTerm} 
      addNewPlant = {addNewPlant}
      removeAPlant = {removeAPlant}
      remove = {remove} 
      setRemove = {setRemove}

      
      
      />
    </div>
  );
}

export default App;
