import { amplitudeLogger } from '../lib/amplitude-utils'

const Tilbakemelding = props => {
  const handleClick = event => {
    const smiley = event.target.dataset.smiley
    amplitudeLogger('hurtigveileder.tilbakemelding', { smiley })
  }

  return (
    <div className="rounded border px-4 py-4 mb-4">
      <p>Hvor nyttig synes du veiledningen var?</p>
      <div className="flex">
        <img src="/images/angry-face.png" alt="Angry emoji" data-smiley="angry" className="w-16 h-16 mr-1 cursor-pointer" onClick={handleClick} />
        <img src="/images/sad-face.png" alt="Sad emoji" data-smiley="sad" className="w-16 h-16 mr-1 cursor-pointer" onClick={handleClick} />
        <img src="/images/neutral-face.png" alt="Neutral emoji" data-smiley="neutral" className="w-16 h-16 mr-1 cursor-pointer" onClick={handleClick} />
        <img src="/images/happy-face.png" alt="Smiling emoji" data-smiley="smile" className="w-16 h-16 mr-1 cursor-pointer" onClick={handleClick} />
        <img src="/images/mega-happy-face.png" alt="Very happy emoji" data-smiley="love" className="w-16 h-16 cursor-pointer" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Tilbakemelding
