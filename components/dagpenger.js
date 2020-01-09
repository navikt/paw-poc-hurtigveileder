import { amplitudeLogger } from '../lib/amplitude-utils'
import calculateDay from '../lib/calculate-day'
import prettyPrintDate from '../lib/pretty-print-date'
import daysFromNow from '../lib/days-from-now'

const DagpengeLink = () => {
  const handleClick = event => {
    const url = event.target.href
    amplitudeLogger('link', { url })
  }
  return (
    <ul>
      <li><a href='https://arbeidssokerregistrering.nav.no' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til arbeidssøkerregistrering</a></li>
      <li><a href='https://www.nav.no/soknader/nb/person/arbeid/dagpenger' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til dagpengesøknad</a></li>
    </ul>
  )
}

const Dagpenger = props => {
  const { lastDay, setShowVeileder } = props
  const firstDay = calculateDay(lastDay, 6)
  const endDay = new Date(firstDay)
  const periodEnd = new Date(endDay.setDate(endDay.getDate() + 5))
  const now = new Date()
  const days = daysFromNow(lastDay)
  const handleClick = event => {
    const url = event.target.href
    amplitudeLogger('link', { url })
    return true
  }
  const handleNyDato = () => {
    setShowVeileder(false)
  }
  return (
    <div className='rounded border px-4 py-4 mb-4'>
      <h2 className='text-2xl'>Dette bør du gjøre fremover</h2>
      <p>
        Din siste dag med lønn {days > 0 ? 'er' : 'var'} <strong>{prettyPrintDate(lastDay)}.</strong> <span className="cursor-pointer" onClick={handleNyDato}>[endre dato]</span><br />
        Du bør registrere deg som arbeidssøker og søke dagpenger <strong>{firstDay <= now ? 'nå' : `i perioden ${prettyPrintDate(firstDay)} - ${prettyPrintDate(periodEnd)}`}</strong>
      </p>
      {firstDay <= now ? <DagpengeLink /> : null}
      <a href='https://www.nav.no/arbeid/dagpenger/kalkulator' className='inline-block border-2 border-blue-500 px-2 py-2 mt-2' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til dagpengekalkulatoren</a>
    </div>
  )
}

export default Dagpenger
