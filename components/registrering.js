import { amplitudeLogger } from '../lib/amplitude-utils'
import calculateDay from '../lib/calculate-day'
import prettyPrintDate from '../lib/pretty-print-date'

const RegistreringLink = () => {
  const handleClick = event => {
    amplitudeLogger('hurtigveileder.click', { goto: 'arbeidssøkerregistrering' })
  }
  return (
    <li><a href="https://arbeidssokerregistrering.nav.no" className="underline" target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til arbeidssøkerregistrering</a></li>
  )
}

const Registrering = props => {
  const { lastDay } = props
  const firstDay = calculateDay(lastDay, 6)
  const now = new Date()
  return (
    <div className='rounded border px-4 py-4 mb-4'>
      <h2 className='text-2xl'>Registrer deg</h2>
      <p>
        Du bør registrere deg som arbeidssøker <strong>{firstDay <= now ? 'nå' : prettyPrintDate(firstDay)}</strong>
      </p>
      <ul>
        {firstDay <= now ? <RegistreringLink /> : null}
      </ul>
    </div>
  )
}

export default Registrering
