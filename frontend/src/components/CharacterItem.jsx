import { useDispatch } from 'react-redux'
import { deleteCharacter } from '../features/characters/characterSlice'

function CharacterItem({ character }) {
  const dispatch = useDispatch()

  return (
    <div className='character'>
      <div>{new Date(character.createdAt).toLocaleString('en-US')}</div>
      <h2>{character.text}</h2>
      <button onClick={() => dispatch(deleteCharacter(character._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default CharacterItem