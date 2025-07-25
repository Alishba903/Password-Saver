import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
        <div className="flex justify-between items-center mycontainer">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500">&lt;</span>
          Aegis<span className="text-green-500">Pass/&gt;</span>
         
          </div>
        <button className='text-white bg-green-700 my-5 rounded-full flex justify-center items-center ring-white ring-1 hover:bg-green-600 transition-all duration-300 md:px-4 px-2 py-1'>
            <img className='invert w-10 p-1' src="icons/github.svg" alt="" />
            <span className="font-bold px-2">GitHub</span>
        </button >
        </div>
    </nav>
  )
}

export default Navbar
