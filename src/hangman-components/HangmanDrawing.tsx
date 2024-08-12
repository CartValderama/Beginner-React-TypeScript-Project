const HEAD = <div className='head' />
const BODY = <div className='body' />
const RIGHT_ARM = <div className='right-arm' />
const LEFT_ARM = <div className='left-arm' />
const RIGHT_LEG = <div className='right-leg' />
const LEFT_LEG = <div className='left-leg' />

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  guessCount: number
}

function HangmanDrawing({ guessCount }: HangmanDrawingProps) {
  return (
    <div className='drawing'>
      {BODY_PARTS.slice(0, guessCount)}
      <div className='dropdown' />
      <div className='overhang' />
      <div className='stand' />
      <div className='base' />
    </div>
  )
}

export default HangmanDrawing
