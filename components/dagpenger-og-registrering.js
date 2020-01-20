import { handleUrlLog } from '../lib/amplitude-utils'
import calculateDay from '../lib/calculate-day'
import prettyPrintDate from '../lib/pretty-print-date'
import daysFromNow from '../lib/days-from-now'
import calculateStatus from '../lib/calculate-status'

const DagpengeLink = props => {
  const { status } = props
  return (
    <ul className='mb-2'>
      <li className='mb-2 text-navBla'><a href='https://arbeidssokerregistrering.nav.no' data-status={status} className='underline' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til arbeidssøkerregistrering</a></li>
      <li className='text-navBla'><a href='https://www.nav.no/soknader/nb/person/arbeid/dagpenger' data-status={status} className='underline' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til dagpengesøknad</a></li>
    </ul>
  )
}

const Dagpenger = props => {
  const { lastDay, setShowVeileder } = props
  const firstDay = calculateDay(lastDay, 7)
  const endDay = new Date(firstDay)
  const periodEnd = new Date(endDay.setDate(endDay.getDate() + 6))
  const now = new Date()
  const days = daysFromNow(lastDay)
  const status = calculateStatus(days)

  const handleNyDato = () => {
    setShowVeileder(false)
  }

  return (
    <div className='bg-white border px-4 py-4 mb-4'>
      <p className='mb-2'>
        Din siste dag med lønn {days > 0 ? 'er' : 'var'} <strong>{prettyPrintDate(lastDay)}.</strong> <span className='cursor-pointer text-navBla' onClick={handleNyDato}>[endre dato]</span>
      </p>
      <h2 className='text-2xl mb-2'>Dette bør du gjøre fremover</h2>
      <p className='mb-2'>
        Du bør registrere deg som arbeidssøker og søke dagpenger <strong>{firstDay <= now ? 'nå' : `i perioden ${prettyPrintDate(firstDay)} - ${prettyPrintDate(periodEnd)}`}</strong>
      </p>
      <p className='mb-2'>
        Husk at du må registrere deg før du søker dagpenger
      </p>
      {firstDay <= now ? <DagpengeLink status={status} /> : null}
      <p className='mb-2'>
        I dagpengekalkulatoren kan du se hvor mye du kunne fått hvis du fikk innvilget dagpenger fra i dag.<br />
        <a href='https://www.nav.no/arbeid/dagpenger/kalkulator' data-status={status} className='inline-block border-2 border-navBla px-2 py-2 mt-2 text-navBla font-bold' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Dagpengekalkulator</a>
      </p>
    </div>
  )
}

export default Dagpenger
