import { handleUrlLog } from '../lib/amplitude-utils'

const Arbeidsplassen = props => {
  return (
    <div className='bg-white border px-4 py-4 mb-4'>
      <p>
        <a href='https://arbeidsplassen.nav.no/' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Du kan legge inn CVen din og finne ledige stillinger på arbeidsplassen.no</a>
      </p>
    </div>
  )
}

export default Arbeidsplassen
