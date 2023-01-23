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
      .delete('https://javaapp.herokuapp.com/todos/' + editZodiac.id)
      .then((response) => {
        getZodiacs()
      })
  }  

  // Create Route 
  const handleCreate = (addZodiac) =>{
    axios
      .post('https://javaapp.herokuapp.com/todos', addZodiac)
      .then((res) =>{
        getZodiacs()
      })
  }
  // Show Route 
  const getZodiacs =() =>{
    axios
      .get('https://javaapp.herokuapp.com/todos')
      .then(
        (res)=>setZodiacs(res.data),
        (err) => console.log(err)
      )
  }
  // Update Route
  const handleUpdate = (editZodiac) => {
    console.log(editZodiac)
    axios
      .put('https://javaapp.herokuapp.com/todos/' + editZodiac.id, editZodiac)
      .then((response) => {
        getZodiacs()
      })
  }
  

  useEffect(()=>{
    getZodiacs()
  },[])

  return (
    <>
      <img src="https://cdn.images.express.co.uk/img/dynamic/130/1200x712/4495437.jpg?r=1673251951012" class="img-fluid" alt="..."></img>
      <Add handleCreate={handleCreate}/>
      
      <div className="zodiacs">
        {
          zodiacs.map((zodiac) =>{
            return(
              <div className="card" key={zodiac.id}>
                <img src={zodiac.image} className="card-img-top" /> 
                <div className="card-body">
                  <h1>Zodiac : {zodiac.zodiac}</h1>
                  <h4>Birth Year : {zodiac.year} </h4>
                </div>

                <div className="list-group list-group-flush">
                  <h5 className="list-group-item">In General : {zodiac.general}</h5>
                  <h5 className="list-group-item">Wealth & Careear : {zodiac.wealth}</h5>
                  <h5 className="list-group-item">Health & Relationshilp : {zodiac.health}</h5>
                  <h5 className="list-group-item">Tips and Advice : {zodiac.tips}</h5>
                </div>
                  <Edit handleUpdate={handleUpdate} zodiac={zodiac}/>
                  <button type="button" class="btn btn-danger" onClick={()=>{handleDelete(zodiac)}}>X</button>
              </div> 
            )
          })
        }
      </div>
    </>
  );
}

export default App;
