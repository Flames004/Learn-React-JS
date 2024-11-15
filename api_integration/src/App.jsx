import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
      <div className="p-5 mt-5 bg-gray-900">
        {data.map((elem, idx)=>{
          return <div key={idx} className='bg-gray-50 text-vlack items-center justify-between w-full px-7 py-6 rounded mb-3'>
            <img className='h-40' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App