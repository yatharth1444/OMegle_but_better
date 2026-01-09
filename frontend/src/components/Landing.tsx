import React, { useState } from 'react'

const Landing = () => {
    const [name, setName] = useState("")
  return (
    <div>
        <input type="text" onChange={(e)=>{
            setName(e.target.value)
        }} />
     <h1>Landing ...</h1>
     <button onClick={()=>{

     }}>Join</button>
    </div>
  )
}

export default Landing
