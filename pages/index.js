import { useState } from 'react'
import DatePicker from 'react-datepicker'
import Veileder from '../components/veileder'
import 'react-datepicker/dist/react-datepicker.css'

function Home () {
  const [lastDay, setLastDay] = useState(new Date())
  const [showVeileder, setShowVeileder] = useState(false)
  const handleDateChange = date => {
    setLastDay(date)
    setShowVeileder(true)
  }
  return (
    <div className="container mx-auto">
    <h1>
      Hurtigveileder
    </h1>
    <DatePicker onChange={handleDateChange} placeholderText="Siste arbeidsdag?" className="border "/>
    { showVeileder ? <Veileder lastDay={lastDay} /> : null }
    </div>
  )
}

export default Home
