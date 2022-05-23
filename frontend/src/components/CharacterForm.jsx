import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCharacter } from '../features/characters/characterSlice'

function CharacterForm() {
  const [text, setText] = useState('')
  const [eyeColour, setEyeColour] = useState('')
  const [hairColour, setHairColour] = useState('')
  const [shirtColour, setShirtColour] = useState('')
  const [pantsColour, setPantsColour] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createCharacter({ text, eyeColour, hairColour, shirtColour, pantsColour }))
    setText('')
    setEyeColour('')
  }
  const eyeColours = ["Select", "Black","Turquoise","Brown","Green","Red"]
  const hairColours = ["Select", "Black", "Brown", "Blond", "Grey", "Red"]
  const shirtColours = ["Select", "Black", "White", "Checkered", "Practical", "Cool"]
  const pantsColours = ["Select", "Black", "White", "Camo", "Practical", "Shorts"]
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Character</label>
          Name: <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => {setText(e.target.value)}}
          />
          Eye Colour: 
          <select  onChange={(e) => {setEyeColour(e.target.value)}}>
            {eyeColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} Colour
              </option>
            ))}
          </select>
          Hair Colour: 
          <select  onChange={(e) => {setHairColour(e.target.value)}}>
            {hairColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} Colour
              </option>
            ))}
          </select>
          Shirt Colour: 
          <select  onChange={(e) => {setShirtColour(e.target.value)}}>
            {shirtColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} Colour
              </option>
            ))}
          </select>
          Pants Colour: 
          <select  onChange={(e) => {setPantsColour(e.target.value)}}>
            {pantsColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} Colour
              </option>
            ))}
          </select>
          
          
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Character
          </button>
        </div>
      </form>
    </section>
  )
}

export default CharacterForm
