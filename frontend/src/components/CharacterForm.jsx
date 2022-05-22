import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCharacter } from '../features/characters/characterSlice'

function CharacterForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createCharacter({ text }))
    setText('')
  }
  const eyeColours = ["Black","Turquoise","Brown","Green","Red"]
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
            onChange={(e) => setText(e.target.value)}
          />
          Eye Colour: 
          <select>
            {eyeColours.map(option => (
              <option key={option} value={option} >
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
