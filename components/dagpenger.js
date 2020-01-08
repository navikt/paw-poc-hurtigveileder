import calculateDay from '../lib/calculate-day'

const Dagpenger = props => {
  const { lastDay } = props
  const firstDay = calculateDay(lastDay, 6)
  const now = new Date()
  return (
    <div>
      Dagpenger: {  firstDay <= now ? 'nå' : firstDay.toLocaleDateString() }
    </div>
  )
}

export default Dagpenger
