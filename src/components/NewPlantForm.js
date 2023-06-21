import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {

  const [newPlantName, setNewPlantName] = useState('')
  const [newPlantImage, setNewPlantImage] = useState('')
  const [newPlantPrice, setNewPlantPrice] = useState('')
  const URL = 'http://localhost:6001/plants'

  function handleNewName(e){
    setNewPlantName(e.target.value)
  }

  function handleNewImage(e){
    setNewPlantImage(e.target.value)
  }

  function handleNewPrice(e){
    setNewPlantPrice(e.target.value)
  }


  function postNewPlant(e){
   e.preventDefault()

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({
       // key: newPlantName,
        //id: 0, 
        name: newPlantName, 
        image: newPlantImage, 
        price: newPlantPrice,
      })

    }).then(response => response.json())
    .then(addNewPlant).catch(error => alert(error.message))
  }

  return (
    <div className="new-plant-form" onSubmit = {postNewPlant}>
      <h2>New Plant</h2>
      <form>
        <input type="text" 
        name="name" 
        placeholder="Plant name" 
        value = {newPlantName}
        onChange = {handleNewName}
        />
        <input type="text"
         name="image" 
         placeholder="Image URL" 
         value = {newPlantImage}
        onChange = {handleNewImage}
         
         />
        <input type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value = {newPlantPrice}
        onChange = {handleNewPrice}

        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
