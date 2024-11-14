import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a,b] = useState(99);
  return (
    <div className="w-full h-screen bg-zinc-900 text-white p-4">
      <Products age={a}/>
      <button onClick={()=>b(a+1)} className='px-4 py-2 border-2 rounded-sm bg-yellow-400 text-black m-1'>Up</button>
      <button onClick={()=>b(a-1)} className='px-4 py-2 border-2 rounded-sm bg-yellow-400 text-black m-1'>Down</button>
    </div>
  )
}

export default App