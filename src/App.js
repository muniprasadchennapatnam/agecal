
import React from 'react'
import './App.css'
import {useState} from "react"
const App = () => {
  const [date, setDate] = useState("")
  const fun=((e)=>{
    e.preventDefault()
    
const dob = new Date(date);
const today = new Date();

let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();

if (days < 0) {
  months--;
days+=31
}


if (months < 0) {
  years--;
  months += 12;
}
if (years<0 || months<0 || days<0){
  var birth='check once the date of birth'
}else{
  birth=`${years} years ${months}  months ${days} days`
}
let ele=document.getElementsByClassName("birth")[0]
ele.innerHTML=birth


  })
  return (
    <div className='con'>
      <form onSubmit={fun}>
        <div className='data'>
          <label for='in'>enter date of birth</label>
      <input type='date' className='in' placeholder='enter date of barth' onChange={(e)=>{setDate(e.target.value)}}/>

      <button type='submit'>submit</button>
      
      </div>
      </form>
      <h2 className="birth"></h2>
    </div>
    
  )
}

export default App