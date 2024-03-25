import { useState } from 'react';
import { Qs } from '../App'
import { Navigate } from 'react-router-dom';
import '../App.css'
interface scu{
    score:number,
    setScore:(value:number | ((prevVar: number) => number)) => void;
}
export const Question = (props:scu) => {
    
var QusBank : Qs[] = [{def:"States in INDIA ?",answer:28,options:[32,34,28,29]},
{def:"Largest State area wise in India ?",answer:"Rajasthan",options:["New Delhi","Rajasthan","Punjab","Himachal Pradesh"]}
,{def:"Largest river in world ?",answer:"Nile",options:["Ganga","Amazon","Nile","Congo River"]}
,{def:"Most hundereds in cricker career in all formats ?",answer:"Sachin Tendulkar",options:["Virat Kohli","Bc Lara"," Sangakara","Sachin Tendulkar"]}
,{def:"Total Countries in World ?",answer:195 ,options:[201,195,197,192]}];
const [page,setPage]=useState(0);
const[value,setValue]=useState<string|number>("NA")

const[complete,steComplete]=useState(false);
function handleChange(){
    if(value == "NA"){
        alert("select an option")
    }
    else if(value== QusBank[page].answer){
        setPage(page+1);
        props.setScore(props.score+5);
        setValue("NA");
    }
    else{
        setPage(page+1);
    }
}
function handleSub(){
    if(value== QusBank[page].answer)
    props.setScore(props.score+5);
    steComplete(true);
}
console.log(props.score);
  return (
    <div >
      
        <p className='h-[30px] p-2'>  <span>Q</span>{QusBank[page].def}</p>
        <div className='flex'>
            <label  htmlFor="opt-1" className='block w-[50%] h-[50px] border rounded-md'>
            <input  type="radio" id="opt-1"  name="options" onChange={()=>{setValue(QusBank[page].options[0])}}
            className=''/>
            <p className='text-center'>{QusBank[page].options[0]}</p></label>
            <label htmlFor="opt-2"  className='block w-[50%] h-[50px] border rounded-md'>
            <input type="radio" id="opt-2" name="options" onChange={()=>{setValue(QusBank[page].options[1])}}
            className=''/>
            <p className='text-center'>{QusBank[page].options[1]}</p></label>
            </div>
            <div className='flex'>
            <label htmlFor="opt-3" className='block w-[50%] h-[50px] border rounded-md'>
            <input type="radio" id="opt-3"  name="options" onChange={()=>{setValue(QusBank[page].options[2])}}
            className=''/>
            <p className='text-center'>{QusBank[page].options[2]}</p>
            </label>
         
           
            <label htmlFor="opt-4" className='block w-[50%] h-[50px] border rounded-md'>
            <input type="radio" id="opt-4"  name="options" onChange={()=>{setValue(QusBank[page].options[3])}}
            className=''/>
            <p className='text-center'>{QusBank[page].options[3]}</p></label>
            </div>
           
        

        {page < QusBank.length-1 ? <button onClick={handleChange} className='border rounded-md bg-green-700 p-1'>Next</button> : 
        <button onClick={handleSub} className='order rounded-md bg-green-700 p-1'>Submit</button> }
        {complete ? <Navigate to="/finalscore"/> : <p></p>}
    </div>
  )
}


