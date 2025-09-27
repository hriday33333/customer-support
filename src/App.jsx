import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import TicketSection from './Components/TicketSectin/TicketSection';

const fatchCoustmer = async () =>{
  const res = await fetch("/coustomars.json")
  return res.json()
}
const coustomarsPromise = fatchCoustmer()

function App() {
  const [count, setCount] = useState(0)
  const [selectedCustomers, setSelectedCustomers] = useState([]) 

  return (
    <>
      <Navbar />
      <Banner count={count} />

      <Suspense fallback="Loading...">
        <TicketSection 
          setCount={setCount} 
          coustomarsPromise={coustomarsPromise} 
          setSelectedCustomers={setSelectedCustomers}
          selectedCustomers={selectedCustomers}    
        />
      </Suspense>

      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
