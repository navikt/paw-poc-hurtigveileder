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
    <ul className="mb-2">
      <li className="mb-2 text-blue-600"><a href='https://arbeidssokerregistrering.nav.no' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til arbeidssøkerregistrering</a></li>
      <li className="text-blue-600"><a href='https://www.nav.no/soknader/nb/person/arbeid/dagpenger' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til dagpengesøknad</a></li>
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
    <div className='bg-white border px-4 py-4 mb-4'>
      <h2 className='text-2xl mb-2'>Dette bør du gjøre fremover</h2>
      <p className="mb-2">
        Din siste dag med lønn {days > 0 ? 'er' : 'var'} <strong>{prettyPrintDate(lastDay)}.</strong> <span className='cursor-pointer' onClick={handleNyDato}>[endre dato]</span>
      </p>
      <p className="mb-2">
        Du bør registrere deg som arbeidssøker og søke dagpenger <strong>{firstDay <= now ? 'nå' : `i perioden ${prettyPrintDate(firstDay)} - ${prettyPrintDate(periodEnd)}`}</strong>
      </p>
      <p className="mb-2">
        Husk at du må registrere deg før du søker dagpenger
      </p>
      {firstDay <= now ? <DagpengeLink /> : null}
      <p className="mb-2">
        I dagpengekalkulatoren kan du se hvor mye du kunne fått hvis du fikk innvilget dagpenger fra i dag.<br />
        <a href='https://www.nav.no/arbeid/dagpenger/kalkulator' className='inline-block border-2 border-blue-600 px-2 py-2 mt-2 text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleClick}><strong>Dagpengekalkulator</strong></a>
      </p>
    </div>
  )
}

export default Dagpenger
