import { useState } from 'react'
import { amplitudeLogger } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import calculateStatus from '../lib/calculate-status'

const Tilbakemelding = props => {
  const [response, setResponse] = useState(false)
  const { lastDay } = props
  const days = daysFromNow(lastDay)
  const status = calculateStatus(days)

  const handleClick = event => {
    const smiley = event.target.dataset.smiley
    amplitudeLogger('tilbakemelding', { smiley, status })
    setResponse(true)
  }
  const ThankYou = () => {
    return (
      <div>
        Takk for tilbakemeldingen.
      </div>
    )
  }

  const Smileys = () => {
    return (
      <div className='flex'>
        <img src='images/angry-face.png' alt='Angry emoji' data-smiley='angry' className='w-16 h-16 mr-1 mt-1 cursor-pointer hover:shadow' onClick={handleClick} />
        <img src='images/sad-face.png' alt='Sad emoji' data-smiley='sad' className='w-16 h-16 mr-1 mt-1 cursor-pointer hover:shadow' onClick={handleClick} />
        <img src='images/neutral-face.png' alt='Neutral emoji' data-smiley='neutral' className='w-16 h-16 mr-1 mt-1 cursor-pointer hover:shadow' onClick={handleClick} />
        <img src='images/happy-face.png' alt='Smiling emoji' data-smiley='smile' className='w-16 h-16 mr-1 mt-1 cursor-pointer hover:shadow' onClick={handleClick} />
        <img src='images/mega-happy-face.png' alt='Very happy emoji' data-smiley='love' className='w-16 h-16 mt-1 cursor-pointer hover:shadow' onClick={handleClick} />
      </div>
    )
  }

  return (
    <div className='bg-white border px-4 py-4 mb-4 border border-navGra40'>
      <p><strong>Hvor nyttig synes du veiledningen var?</strong></p>
      {response ? <ThankYou /> : <Smileys />}
    </div>
  )
}

export default Tilbakemelding
