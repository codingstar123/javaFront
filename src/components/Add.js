import React, {useState,useEffect} from 'react'

const Add = (props) => {
    let emptyZodiac = {
        Zodiac: "",
        Year: "",
        General: "",
        Wealth: "",
        Health: "",
        Tips: "", 
        Image:""
    }

    const [zodiac, setZodiac] = useState(emptyZodiac)

    const handleChange = (event) => {
        setZodiac({ ...zodiac, [event.target.name]: event.target.value })
      }
      
      const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(zodiac)
      }
      
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="zodiac">Zodiac : </label>
                <input type="text" name="zodiac" onChange={handleChange}/>
                <label htmlFor="year">Year : </label>
                <input type="text" name="year" onChange={handleChange}/>
                <label htmlFor="general">General : </label>
                <input type="text" name="general" onChange={handleChange}/>
                <label htmlFor="wealth">Wealth : </label>
                <input type="text" name="wealth" onChange={handleChange}/>
                <label htmlFor="health">Health : </label>
                <input type="text" name="health" onChange={handleChange}/>
                <label htmlFor="tips">Tips : </label>
                <input type="text" name="tips" onChange={handleChange}/>
                <label htmlFor="image">Image url : </label>
                <input type="text" name="image" onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Add