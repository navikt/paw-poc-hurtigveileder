import { useState } from 'react'
import DayPicker from 'react-day-picker'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import NavHode from '../components/nav-hode'

const NavFot = dynamic(
  () => import('../components/nav-fot'),
  { ssr: false }
)

const Veileder = dynamic(
  () => import('../components/veileder'),
  { ssr: false }
)

function Home () {
  const [lastDay, setLastDay] = useState('')
  const [arbeidsplassenSvar, setArbeidsplassenSvar] = useState(false)
  const [showVeileder, setShowVeileder] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  const handleDateChange = date => {
    setLastDay(date)
    setShowVeileder(true)
  }

  const handleArbeidsplassenSvar = event => {
    const arbeidsplassenSvar = event.target.dataset.arbeidsplassen
    setArbeidsplassenSvar(arbeidsplassenSvar)
    setShowCalendar(true)
  }

  const Calendar = () => {
    return (
      <div className='bg-white px-4 py-4'>
        <DayPicker onDayClick={handleDateChange} />
        <p className='mt-2'><strong>Oppgi siste dag du får lønn for</strong></p>
      </div>
    )
  }

  const ArbeidsplassenCV = () => {
    return (
      <div className='bg-white p-4 mb-4'>
        <p className='font-bold mb-4'>
          Har du opprettet CV og jobbprofil på Arbeidsplassen.no?
        </p>
        <div className='flex'>
          <button data-arbeidsplassen='ja' onClick={handleArbeidsplassenSvar} className='flex-grow font-bold text-center border-2 border-navBla px-2 py-2 mt-2 mr-2 text-navBla font-bold hover:bg-navBla hover:text-white'>Ja</button>
          <button data-arbeidsplassen='nei' onClick={handleArbeidsplassenSvar} className='flex-grow font-bold text-center border-2 border-navBla px-2 py-2 mt-2 mr-2 text-navBla font-bold hover:bg-navBla hover:text-white'>Nei</button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <meta name='description' content='Hurtigveileder for deg som har mistet jobbben og skal registrere deg som arbeidssøker.' />
        <title>Hurtigveileder - arbeidssøkerregistrering - mistet jobben</title>
      </Head>
      <div className='flex flex-col items-start md:h-screen'>
        <NavHode />
        <div className='mx-auto p-4 flex-grow'>
          {!arbeidsplassenSvar ? <ArbeidsplassenCV /> : null}
          {showVeileder ? <Veileder lastDay={lastDay} setShowVeileder={setShowVeileder} /> : showCalendar ? <Calendar /> : null}
        </div>
        <NavFot />
      </div>
    </>
  )
}

export default Home
