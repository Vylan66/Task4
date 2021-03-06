import { useDispatch } from 'react-redux'
import { deleteCharacter } from '../features/characters/characterSlice'

function CharacterItem({ character }) {
  const dispatch = useDispatch()

  return (
    <div className='character'>
      <div>{new Date(character.createdAt).toLocaleString('en-US')}</div>
      <h2>Name: {character.text}</h2>
      <h2>Eye Colour: {character.eyeColour}</h2>
      <h2>Hair Colour: {character.hairColour}</h2>
      <h2>Shirt Colour: {character.shirtColour}</h2>
      <h2>Pants Colour: {character.pantsColour}</h2>
      <button onClick={() => dispatch(deleteCharacter(character._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default CharacterItem
