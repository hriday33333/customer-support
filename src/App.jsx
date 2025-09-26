import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'

import Navbar from './Components/Navbar/Navbar'
import TicketSection from './Components/TicketSectin/TicketSection'

const fatchCoustmer = async () =>{
  const res = await fetch("/public/coustomars.json")
  return res.json()
}
const coustomarsPromise = fatchCoustmer()

function App() {
  

  return (
    <>
    <Navbar></Navbar>


    <Banner></Banner>

   <Suspense fallback="Loading...">
    <TicketSection coustomarsPromise={coustomarsPromise}></TicketSection>
   </Suspense>
   
    <Footer></Footer>
  
    </>
  )
}

export default App
