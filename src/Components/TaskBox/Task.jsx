import Resolved from '../../Components/ResolvedTask/Resolved';

const Task = ({ selectedCustomers, handleDeleteCustomer, resolvedCustomers }) => {
  return (
    <div className='md:col-span-3 col-span-5 p-2'>
      <div>
        <div className="text-xl font-bold">Task Status</div>
      </div>

      <div className="space-y-4 mt-3">
        {selectedCustomers.length === 0 ? (
          <p className="text-gray-400">Selected tickets will appear here</p>
        ) : (
          selectedCustomers.map(customer => (
            <div key={customer.id} className="p-3 bg-slate-200 rounded-md shadow-lg border-b-1 border-b-green-700">
              <h2 className="font-bold">{customer.title}</h2>
              <p className="text-sm text-gray-600">{customer.description}</p>
              <p className="text-xs text-gray-400">Status: {customer.status}</p>
              <button
                className="mt-4 btn bg-green-700 w-full text-white"
                onClick={() => handleDeleteCustomer(customer.id)}
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      <Resolved resolvedCustomers={resolvedCustomers} />
    </div>
  );
};

export default Task;
