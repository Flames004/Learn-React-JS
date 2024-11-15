import React, { useState } from 'react'
/*
In form handling we handle the form in such a way that it takes the input and submit the form without reloading the page on each submission.
We use react to handle the input process inside the input box by using two way binding.
And we use preventDefault method to stop the default behaviour of form which is reloading the page on each submission.
*/
function App() {
  const submitHandler = (e)=>{
    e.preventDefault()  // it is used to prevent the default behaviour of form which is to reload after submit
    console.log("Username:", username)
    setUsername('') // again clear the input box
  }
  
  const [username, setUsername] = useState('')
 
  return (
    <div className='bg-zinc-900'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value) // it sets the value of the input box as the value being given along with using react as a medium
          // This is known as Two Way Binding
          // Here we are giving input as we type and setting the value but by letting react do it
        }}
        className='px-4 py-3 rounded-md text-xl m-5' 
        type="text" 
        placeholder='Enter Your Name' />
        <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-700 rounded-lg'>Submit</button>
      </form> 
    </div>
  )
}

export default App