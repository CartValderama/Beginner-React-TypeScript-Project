import { useCallback, useEffect, useState } from 'react'
import './App.css'
import HangmanDrawing from './hangman-components/HangmanDrawing'
import HangmanWord from './hangman-components/HangmanWord'
import Keyboard from './hangman-components/Keyboard'
import words from './wordList.json'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord())
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(5)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters((currentLetters) => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log('working')
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  const handlePlayAgain = () => {
    setScore(6)
    setLives(5)
    setGuessedLetters([])
    setWordToGuess(getWord())
  }

  useEffect(() => {
    if (isWinner) {
      setScore((prevScore) => prevScore + 1)
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
  }, [isWinner])

  useEffect(() => {
    if (isLoser) {
      setLives((prevLives) => prevLives - 1)
      setTimeout(() => {
        setGuessedLetters([])
        setWordToGuess(getWord())
      }, 1000)
    }
  }, [isLoser])

  return (
    <div className='container'>
      <div className='scoreboard'>
        <p>Score: {score} / 7</p>
        <p>Lives: {lives}</p>
      </div>

      <div className='main'>
        {score === 7 && (
          <div className='status'>
            <p>Winner</p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button
                onClick={() => {
                  window.location.href =
                    'https://aquamarine-begonia-e3e1c3.netlify.app/'
                }}
              >
                Return Home
              </button>
              <button onClick={handlePlayAgain}>Play Again</button>
            </div>
          </div>
        )}
        {lives === 0 && (
          <div className='status'>
            <p>Loser</p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button
                onClick={() => {
                  window.location.href =
                    'https://aquamarine-begonia-e3e1c3.netlify.app/'
                }}
              >
                Return Home
              </button>
              <button onClick={handlePlayAgain}>Play Again</button>
            </div>
          </div>
        )}
        {lives !== 0 && score !== 7 && (
          <>
            <div style={{ alignSelf: 'stretch' }}>
              <Keyboard
                disabled={isWinner || isLoser}
                activeLetters={guessedLetters.filter((letter) =>
                  wordToGuess.includes(letter)
                )}
                inactiveLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetter}
              />
            </div>
            <div className='middle'>
              <HangmanDrawing guessCount={incorrectLetters.length} />
              <HangmanWord
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
                reveal={isLoser}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
