import dynamic from 'next/dynamic'
import Arbeidsplassen from './arbeidsplassen'
import Dagpenger from './dagpenger'
import Dokumentasjon from './dokumentasjon'
import Registrering from './registrering'
const Tilbakemelding = dynamic(
  () => import('./tilbakemelding'),
  { ssr: false }
)

const Veileder = props => {
  const { lastDay } = props
  return (
    <>
      <Registrering lastDay={lastDay} />
      <Dagpenger lastDay={lastDay} />
      <Dokumentasjon />
      <Arbeidsplassen />
      <Tilbakemelding />
    </>
  )
}

export default Veileder
