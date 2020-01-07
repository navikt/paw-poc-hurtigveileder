import calculateDay from '../lib/calculate-day'

const Veileder = props => {
  const { lastDay } = props
  const firstDay = calculateDay(lastDay)
  const now = new Date()
  return (
    <>
      <div>
        Skaff dokumentasjon fra arbeidsgiver
      </div>
      <div>
        Registrer CV på Arbeidsplassen
      </div>
      <div>
        Dagpenger: {  firstDay <= now ? 'nå' : firstDay.toLocaleDateString() }
      </div>
    </>
  )
}

export default Veileder