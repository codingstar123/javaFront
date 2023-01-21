import React, { useState } from 'react'

const Edit = (props) => {

  const [zodiac, setZodiac] = useState({...props.zodiac})

  const handleChange = (event) => {
    setZodiac({ ...zodiac, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(zodiac)
  }

  
  return (
    <>
      <details>
        <summary>Edit Zodiac</summary>
        <form onSubmit={handleSubmit}>
            <label htmlFor="zodiac">Zodiac : </label>
            <input type="text" name="zodiac" value={zodiac.zodiac} onChange={handleChange}/>
            <label htmlFor="year">Year : </label>
            <input type="text" name="year" value={zodiac.year} onChange={handleChange}/>
            <label htmlFor="general">General : </label>
            <input type="text" name="general" value={zodiac.general} onChange={handleChange}/>
            <label htmlFor="wealth">Wealth : </label>
            <input type="text" name="wealth" value={zodiac.wealth} onChange={handleChange}/>
            <label htmlFor="health">Health : </label>
            <input type="text" name="health" value={zodiac.health} onChange={handleChange}/>
            <label htmlFor="tips">Tips : </label>
            <input type="text" name="tips" value={zodiac.tips} onChange={handleChange}/>
            <input type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit
