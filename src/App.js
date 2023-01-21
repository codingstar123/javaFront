import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add.js'
import Edit from './components/Edit.js'

function App() {

  let [zodiacs, setZodiacs] = useState([])

  // Delete Route 
  const handleDelete = (editZodiac) => {
    console.log(editZodiac)
    axios
      .delete('http://localhost:8080/todos/' + editZodiac.id)
      .then((response) => {
        getZodiacs()
      })
  }  

  // Create Route 
  const handleCreate = (addZodiac) =>{
    axios
      .post('http://localhost:8080/todos', addZodiac)
      .then((res) =>{
        getZodiacs()
      })
  }
  // Show Route 
  const getZodiacs =() =>{
    axios
      .get('http://localhost:8080/todos')
      .then(
        (res)=>setZodiacs(res.data),
        (err) => console.log(err)
      )
  }
  // Update Route
  const handleUpdate = (editZodiac) => {
    console.log(editZodiac)
    axios
      .put('http://localhost:8080/todos/' + editZodiac.id, editZodiac)
      .then((response) => {
        getZodiacs()
      })
  }
  

  useEffect(()=>{
    getZodiacs()
  },[])

  return (
    <>
      <h1>APP</h1>
      <Add handleCreate={handleCreate}/>
      <div className="zodiacs">
        {
          zodiacs.map((zodiac) =>{
            return(
              <div className="zodiac" key={zodiac.id}>
                <h4>Zodiac : {zodiac.zodiac}</h4>
                <h5>Birth Year : {zodiac.year} </h5>
                <p>In General : {zodiac.general}</p>
                <p>Wealth & Careear : {zodiac.wealth}</p>
                <p>Health & Relationship : {zodiac.health}</p>
                <p>Tips and Advice : {zodiac.tips}</p>
                <img src={zodiac.image} /> 
                <Edit handleUpdate={handleUpdate} zodiac={zodiac}/>
                <button onClick={()=>{handleDelete(zodiac)}}>X</button>
              </div>  


            )
          })
        }
      </div>
    </>
  );
}

export default App;
