import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCharacter } from '../features/characters/characterSlice'
import { toast } from 'react-toastify'

function CharacterForm() {
  const [text, setText] = useState('')
  const [eyeColour, setEyeColour] = useState('')
  const [hairColour, setHairColour] = useState('')
  const [shirtColour, setShirtColour] = useState('')
  const [pantsColour, setPantsColour] = useState('')

  const onChange = (e) => {
    setEyeColour((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      toast.error('What\'s the character\'s name????')
    }
    if (eyeColour === '') {
      toast.error('You have not selected an eye colour :(')
    }
    if (hairColour === '') {
      toast.error('You have not selected a hair colour...')
    }
    if (shirtColour === '') {
      toast.error('You haven\'t picked your shirt colour -_- ')
    }
    if (pantsColour === '') {
      toast.error('Pants colour??')
    }
   

    dispatch(createCharacter({ text, eyeColour, hairColour, shirtColour, pantsColour }))
    setText('')
    setEyeColour('')
  }
  const eyeColours = ["Black","Turquoise","Brown","Green","Red"]
  const hairColours = ["Black", "Brown", "Blond", "Grey", "Red"]
  const shirtColours = ["Black", "White", "Checkered", "Practical", "Cool"]
  const pantsColours = ["Black", "White", "Camo", "Practical", "Shorts"]
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Create Your Character</label>
          Name: <input
            type='text'
            name='text'
            id='text'
            value={text}
            placeholder='Enter character name'
            onChange={(e) => {setText(e.target.value)}}
          />
          Eye Colour: 
          <select  onChange={(e) => {setEyeColour(e.target.value)}}>
            <option value=''> --Please select an eye colour-- </option>
            {eyeColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option}
              </option>
            ))}
          </select>
          
          Hair Colour: 
          <select  onChange={(e) => {setHairColour(e.target.value)}}>
            <option value=''> --Please select a hair colour-- </option>
            {hairColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} 
              </option>
            ))}
          </select>
          Shirt Colour: 
          <select  onChange={(e) => {setShirtColour(e.target.value)}}>
            <option value=''> --Please select a shirt colour-- </option>
            {shirtColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} 
              </option>
            ))}
          </select>
          Pants Colour: 
          <select  onChange={(e) => {setPantsColour(e.target.value)}}>
            <option value=''> --Please select a pants colour-- </option>
            {pantsColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} 
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
