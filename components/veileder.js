import Arbeidsplassen from './arbeidsplassen'
import Dagpenger from './dagpenger'
import Dokumentasjon from './dokumentasjon'
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
    </>
  )
}

export default Veileder
