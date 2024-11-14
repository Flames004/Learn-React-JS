import React from 'react'

const Card = (props) => {
  return (
    <div className="flex-col bg-slate-100 text-black inline-block p-6 text-center rounded-lg shadow-black shadow-md w-80 h-[360px]">
        <img className='h-32 w-32 rounded-full mb-3 ml-[70px]' src={props.pic} alt="image here" />
        <h1 className='text-2xl font-bold mb-1'>{props.name} {props.surname}</h1>
        <h2 className='text-base font-normal mb-1'>{props.gender}</h2>
        <h2 className='text-lg font-normal mb-2'>{props.age}, {props.city}</h2>
        <h2 className='text-xl font-semibold font-mono mb-1 text-blue-500'>{props.profession}</h2>
        <button className='border-black border-2 rounded-md px-2 py-1 mt-3 text-sm font-bold bg-yellow-500'>Add Friend</button>
    </div>
  )
}

export default Card