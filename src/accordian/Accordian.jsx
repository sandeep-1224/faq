import React, { useState } from 'react'
import MyAccordtion from '../MyAccordtion';
import "./accordian.css"
import { questions } from './Data'

function Accordian() {
    const[data,setData] =useState( questions);
  return (
    <>
   <section className='main-div'>
   <h1> Faq</h1>
   {data.map( (cur)=>{
       const{id}=cur
       return<MyAccordtion  key={id} {...cur}/>;
       
    })}
    </section>
    
    </>
  )
}

export default Accordian