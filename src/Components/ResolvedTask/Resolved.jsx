const Resolved = ({ resolvedCustomers }) => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Resolved Task</h1>
      {resolvedCustomers.length === 0 ? (
        <p className="text-gray-400">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-2 mt-3">
          {resolvedCustomers.map(customer => (
            <div key={customer.id} className="p-3 bg-green-100 rounded-md shadow">
              <h2 className="font-semibold">{customer.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Resolved;
