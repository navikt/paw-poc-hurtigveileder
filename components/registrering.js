import calculateDay from '../lib/calculate-day'

const Innhold = () => {
  return (
    <div>
      Registrer deg
    </div>
  )
}

const Registrering = props => {
  const { lastDay } = props
  const firstDay = calculateDay(lastDay, 6)
  const now = new Date
  return firstDay <= now ? <Innhold /> : null
}

export default Registrering
