import Arbeidsplassen from './arbeidsplassen'
import Dagpenger from './dagpenger'
import Dokumentasjon from './dokumentasjon'
import Mer from './mer'
import Registrering from './registrering'
import Tilbakemelding from './tilbakemelding'

const Veileder = props => {
  const { lastDay } = props
  return (
    <>
      <Registrering lastDay={lastDay} />
      <Dagpenger lastDay={lastDay} />
      <Dokumentasjon />
      <Arbeidsplassen />
      <Tilbakemelding />
      <Mer />
    </>
  )
}

export default Veileder
