
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100  md:w-[1300px] mx-auto shadow-sm">
  <div className="flex-1">
    <a className="  md:font-bold  md:btn-ghost  font-semibold md:text-2xl">CS — Ticket System</a>
  </div>
  <div className="flex-none">

  <ul className="menu menu-horizontal px-1 hidden md:flex">
    <li><a>Home</a></li>
    <li><a>FAQ</a></li>
    <li><a>Changelog</a></li>
    <li><a>Blog</a></li>
    <li><a>Download</a></li>
    <li><a>Contact</a></li>
    <button className=" bg-gradient-to-br from-violet-700 to-purple-500 p-2 rounded  text-white">+ New Ticket</button>
  </ul>

  <div className=" flex justify-center items-center">
    <div className=" md:hidden">
      <button className=" bg-gradient-to-br from-violet-700 to-purple-500 p-1 rounded   text-white">+ New Ticket</button>
    </div>
    <div className="md:hidden">
    <details className="dropdown">
      <summary className=" btn ml-2 hover:bg-gradient-to-br from-violet-700 to-purple-500">...</summary>
      <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
    <li><a>FAQ</a></li>
    <li><a>Changelog</a></li>
    <li><a>Blog</a></li>
    <li><a>Download</a></li>
    <li><a>Contact</a></li>
      </ul>
    </details>
  </div>
  </div>

</div>

</div>
        </div>
    );
};

export default Navbar;