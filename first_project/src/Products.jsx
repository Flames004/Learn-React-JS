import React, { useState } from 'react'

function Products({age}) {
    const [a,b] = useState(false);
  return (
    <div className="p-5 text-white bg-zinc-700 h-1/2 w-full rounded-lg">
        <h1 className={`${a===false ? "text-red-600" : "text-blue-600"}`}>{age}</h1>
        <button onClick={()=>b(!a)} className='px-4 py-2 border-2 rounded-sm bg-yellow-400 text-black'>Color</button>
    </div>
  )
}

export default Products