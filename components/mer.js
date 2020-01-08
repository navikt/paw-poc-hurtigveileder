import { amplitudeLogger } from '../lib/amplitude-utils'

const Mer = () => {
  const handleClick = () => {
    amplitudeLogger('hurtigveileder.click', { goto: 'utvidet veileder' })
    window.location = 'https://veiledearbeidssoker.nav.no/mistet-jobben?sprak=nb'
  }

  return (
    <div className="rounded border px-4 py-4 mb-4 cursor-pointer" onClick={handleClick}>
      <h2 className="text-2xl">Mer veiledning</h2>
      <p>
        Trykk her for å komme til den utvidede veilederen vår.
      </p>
    </div>
  )
}

export default Mer
