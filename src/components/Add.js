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
                <br/>
                <label htmlFor="year">Year : </label>
                <input type="text" name="year" onChange={handleChange}/>
                <br/>
                <label htmlFor="general">General : </label>
                <input type="text" name="general" onChange={handleChange}/>
                <br/>
                <label htmlFor="wealth">Wealth : </label>
                <input type="text" name="wealth" onChange={handleChange}/>
                <br/>
                <label htmlFor="health">Health : </label>
                <input type="text" name="health" onChange={handleChange}/>
                <br/>
                <label htmlFor="tips">Tips : </label>
                <input type="text" name="tips" onChange={handleChange}/>
                <br/>
                <label htmlFor="image">Image url : </label>
                <input type="text" name="image" onChange={handleChange}/>
                <br/>
                <input type="submit" class="btn btn-success"/>
            </form>
              
        </>
    )
}

export default Add