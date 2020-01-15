import { handleUrlLog } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import calculateStatus from '../lib/calculate-status'

const Arbeidsplassen = props => {
  const { lastDay } = props
  const days = daysFromNow(lastDay)
  const status = calculateStatus(days)

  return (
    <div className='bg-white border px-4 py-4 mb-4'>
      <p>
        <a href='https://arbeidsplassen.nav.no/' data-status={status} className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Du kan legge inn CVen din og finne ledige stillinger på arbeidsplassen.no</a>
      </p>
    </div>
  )
}

export default Arbeidsplassen
