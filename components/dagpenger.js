import calculateDay from '../lib/calculate-day'
import prettyPrintDate from '../lib/pretty-print-date'

const DagpengeLink = () => {
  return (
    <li>Link til dagpengesøknad</li>
  )
}

const Dagpenger = props => {
  const { lastDay } = props
  const firstDay = calculateDay(lastDay, 6)
  const now = new Date()
  return (
    <div className='rounded border px-4 py-4 mb-4'>
      <h2 className='text-2xl'>Søk om Dagpenger</h2>
      <p>
        Du bør søke om dagpenger <strong>{firstDay <= now ? 'nå' : prettyPrintDate(firstDay)}</strong>
      </p>
      <ul>
        {firstDay <= now ? <DagpengeLink /> : null}
        <li>Link til dagpengekalkulator</li>
        <li>Link til dagpengesiden</li>
      </ul>
    </div>
  )
}

export default Dagpenger
