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
  const shirtColours = ["Black", "White", "Camo", "Blue", "Checkered"]
  const pantsColours = ["Black", "White", "Camo", "Grey", "Rainbow"]
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <div class="property-title">Create Your Character</div>
          <label class="property-label" htmlFor='text'>Name:</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            placeholder='Enter character name'
            onChange={(e) => {setText(e.target.value)}}
          />
          <label class="property-label">Eye Colour:</label>
          <select  onChange={(e) => {setEyeColour(e.target.value)}}>
            <option value=''> --Please select an eye colour-- </option>
            {eyeColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option}
              </option>
            ))}
          </select>
          <label class="property-label">Hair Colour:</label>
          <select  onChange={(e) => {setHairColour(e.target.value)}}>
            <option value=''> --Please select a hair colour-- </option>
            {hairColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} 
              </option>
            ))}
          </select>
          <label class="property-label">Shirt Colour:</label>
          <select  onChange={(e) => {setShirtColour(e.target.value)}}>
            <option value=''> --Please select a shirt colour-- </option>
            {shirtColours.map(option => (
              <option key={option} value={option === "Select" ? "" : option} >
                {option} 
              </option>
            ))}
          </select>
          <label class="property-label">Pants Colour:</label>
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
