import { amplitudeLogger } from '../lib/amplitude-utils'

const Arbeidsplassen = props => {
  const handleClick = event => {
    const url = event.target.href
    amplitudeLogger('link', { url })
  }

  return (
    <div className='bg-white border px-4 py-4 mb-4'>
      <p>
        <a href='https://arbeidsplassen.nav.no/' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Du kan legge inn CVen din og finne ledige stillinger på arbeidsplassen.no</a>
      </p>
    </div>
  )
}

export default Arbeidsplassen
