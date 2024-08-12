const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({
  disabled,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className='keyboard'>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)

        return (
          <button
            key={key}
            onClick={() => addGuessedLetter(key)}
            className={`button-keys ${isActive ? 'active' : ''} ${
              isInactive ? 'inactive' : ''
            }`}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
