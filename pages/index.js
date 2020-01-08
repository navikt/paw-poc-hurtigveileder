import { useState } from 'react'
import DatePicker from 'react-datepicker'
import Veileder from '../components/veileder'
import 'react-datepicker/dist/react-datepicker.css'

function Home () {
  const [lastDay, setLastDay] = useState('')
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
    <DatePicker onChange={handleDateChange} selected={lastDay} placeholderText="Siste arbeidsdag?" className="border" dateFormat="dd.MM.yyyy"/>
    { showVeileder ? <Veileder lastDay={lastDay} /> : null }
    </div>
  )
}

export default Home
