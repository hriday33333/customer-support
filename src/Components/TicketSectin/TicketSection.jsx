

import { use } from 'react';

import imgGreen from '../../assets/Green-dot.svg';
import calendar from '../../assets/calander.svg';
import imgYello from '../../assets/yellw-dot.svg';
import Task from '../TaskBox/Task';
const TicketSection = ({coustomarsPromise}) => {
  const coustomarsData = use(coustomarsPromise)
  console.log(coustomarsData)
    return (
         <div className='  md:w-11/12  mx-auto  md:py-10 p-6 grid grid-cols-12 md:p-0   md:gap-5 gap-1.5'>

      <div className=' md:col-span-8 col-span-8'>
        <div className=" text-xl font-bold p-2">Customer Tickets</div>

        <div className='  md:grid grid-cols-2 gap-5 md:space-y-0 space-y-3 '>


          {
            coustomarsData.map(customer=> <div key={customer.id} className=' p-5 bg-slate-200 rounded-2xl  shadow-xl'>
             <div className=" flex justify-between ">
            <h1 className=' font-bold'>{customer.title
}</h1>
            <div className={`rounded-lg ${customer.status=="Open" ? "bg-green-200" : "bg-yellow-200"} flex justify-between items-center`}>
                {
                  customer.status=="Open" ? <img className=' p-2' src={imgGreen} alt="" /> : <img className=' p-2' src={imgYello} alt="" />
                }
                <p className=' text-gray-700 text-sm p-2'>{customer.status}</p>
            </div>
        </div>
        <p className='text-sm text-gray-700'>{customer.description}</p>
        <div className='  md:flex justify-between items-center'>
            <div className='  md:flex justify-between items-center space-x-2 '>
                <h3 className=' text-gray-700 text-sm'>#{customer.id}</h3>
                <p className={` text-sm  text-gray-700 ${customer.priority== "HIGH  PRIORITY" ? "text-red-500" : customer.priority== "MEDIUM  PRIORITY" ? "text-yellow-500" :customer.priority== "LOW  PRIORITY" ? "text-green-500":""}`}>{customer.priority}</p>
            </div>
            <div className='  md:flex justify-between items-center space-x-2'>
                <p className=' text-gray-700 text-sm'>{customer.customer}</p>
                <img src={calendar} alt="" />
                <p className=' text-sm text-gray-700'>{customer.createdAt}</p>
            </div>
        </div>
           </div>)
          }

        </div>

      </div>





      <Task></Task>



    </div>
    
    );
};

export default TicketSection;