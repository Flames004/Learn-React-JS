import React, { useState } from 'react'

function App() {
  const [red, changeRed] = useState(0);
  const [green, changeGreen] = useState(0);
  const [blue, changeBlue] = useState(0);
  return (
    <div className='p-5 parent w-full flex'>
      <div className="controls flex w-1/2 items-center justify-evenly">
        <div className="red-button flex-col h-36 w-20 m-2">
          <button onClick={()=>changeRed(red+1)} className='px-3 py-1 border-black border-2 rounded-sm text-black bg-amber-300'>Up</button>
          <b className='text-lg'>RED</b>
          <button onClick={()=>changeRed(red-1)} className='px-3 py-1 border-black border-2 rounded-sm text-black bg-amber-300'>Down</button>
        </div>

        <div className="green-button flex-col h-36 w-20 m-2">
          <button onClick={()=>changeGreen(green+1)} className='px-3 py-1 border-black border-2 rounded-sm text-black bg-amber-300'>Up</button>
          <b className='text-lg'>GREEN</b>
          <button onClick={()=>changeGreen(green-1)} className='px-3 py-1 border-black border-2 rounded-sm text-black bg-amber-300'>Down</button>
        </div>

        <div className="blue-button flex-col h-36 w-20 m-2">
          <button onClick={()=>changeBlue(blue+1)} className='px-3 py-1 border-black border-2 rounded-sm text-black bg-amber-300'>Up</button>
          <b className='text-lg'>BLUE</b>
          <button onClick={()=>changeBlue(blue-1)} className='px-3 py-1 border-black border-2 rounded-sm text-black bg-amber-300'>Down</button>
        </div>
      </div>
      <div className="plate m-2 h-80 w-80 border-4 border-black rounded-lg p-5"
        style={{ backgroundColor: `rgb(${red},${green},${blue})` }}></div>
        <b className='text-2xl'>RGB({red},{green},{blue})</b>
    </div>
  )
}

export default App