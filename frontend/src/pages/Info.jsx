import { Link, useNavigate } from 'react-router-dom'

function Info() {
  const navigate = useNavigate()

  const toCharacter = () => {
    navigate('/')
  }
  return (
    <>
      <section className='heading'>
        <h1>Insect survival</h1>
        <p> About:</p>
      </section>
      <body>
        <p>Insect survival is a game that puts you in a world where all insects have mutated! No one knows when it happened, but a strange, radioactive fog suddenly appeared and envoloped the world, transforming all insects into humongous monstrosities, and they started destroying everything, mainly hunting for humans.</p>
        <p>-----</p>
        <p>However, the fog also gave some humans gifts, and one of those chosen ones is you! A group of scientists who got their brains enhanced have figured out a way to counteract the fog and return everything back to normal!</p>
        <p>Your job, is to collect the parts required to build the machine to fix this</p>
        <p>As you go off to collect the parts for your machine, you will explore different biomes, and encounter different types of insects to battle</p>
        <p>-----</p>
        <h1>Build your character and embark on your journey to save the world!</h1>
        <button className='btn' id='build-character-btn' onClick={toCharacter}>
               Build your character now!
            </button>
      </body>
    </>
  )
}

export default Info
