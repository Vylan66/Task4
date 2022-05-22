import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CharacterForm from '../components/CharacterForm'
import CharacterItem from '../components/CharacterItem'
import Spinner from '../components/Spinner'
import { getCharacters, reset } from '../features/characters/characterSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { characters, isLoading, isError, message } = useSelector(
    (state) => state.characters
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getCharacters())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Characters Dashboard</p>
      </section>

      <CharacterForm />

      <section className='content'>
        {characters.length > 0 ? (
          <div className='characters'>
            {characters.map((character) => (
              <CharacterItem key={character._id} character={character} />
            ))}
          </div>
        ) : (
          <h3>You have not set any characters</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
