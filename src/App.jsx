import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import TicketSection from './Components/TicketSectin/TicketSection';

const fetchCustomers = async () => {
  const res = await fetch("/coustomars.json");
  return res.json();
};

const customersPromise = fetchCustomers();

function App() {
  const [count, setCount] = useState(0);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [resolvedCustomers, setResolvedCustomers] = useState([]);

  return (
    <>
      <Navbar />

      <Banner count={count} resolvedCount={resolvedCustomers.length} />

      <Suspense fallback="Loading...">
        <TicketSection
          coustomarsPromise={customersPromise}
          setCount={setCount}
          selectedCustomers={selectedCustomers}
          setSelectedCustomers={setSelectedCustomers}
          resolvedCustomers={resolvedCustomers}
          setResolvedCustomers={setResolvedCustomers}
        />
      </Suspense>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
