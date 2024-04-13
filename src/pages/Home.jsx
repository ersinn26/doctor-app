// import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { useState } from "react"
import { appointmentData } from "../helpers/data"
import AppointmentList from "../components/AppointmentList"


const Home = () => {
const[appointments,setAppointments]=useState(appointmentData)
// console.log(appointments)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors setApps={setAppointments} apps={appointments} />
      <AppointmentList />
    </main>
  )
}

export default Home