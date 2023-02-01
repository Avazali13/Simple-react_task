import {useState} from 'react';

export function Main(){
 const [num,setNum] = useState(0)
 const number =(a)=>{
  setNum(num+a)
 }
      
  return(
  <main>
  
    <h1>Counter : <span style={{color: num===0 ? "aqua": num > 0 ? "green":"red"}}>{num}</span> </h1>
    {/* <h1>Counter : {num} </h1> */}
    <p>{num===0? "sifirdir":num>0 ? "musbetdir":"menfidir"} </p>
    <button onClick ={()=>{number(+1)}}>increase</button>
    <button onClick ={()=>{number(-1)}}>decrease</button>
    <button onClick ={()=>{number(+5)}}>+5</button>
    <button onClick ={()=>{number(-5)}}>-5</button>

    
  </main>  
  )
}