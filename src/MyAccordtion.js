import React, { useState } from 'react'


function MyAccordtion({question,answer}) {
    const[show,setShow]=useState(false);
  return (
    <>
    <div className='main-heading'>
    <p onClick={()=> setShow(!show)}>{show?"-" :"+"}</p>
    <h3>{question}</h3>
    </div>
    {
        show && <p>{answer}</p>
    }
    
    </>
  )
}

export default MyAccordtion