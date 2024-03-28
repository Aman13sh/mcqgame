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
const[select,setSelect]=useState(false);
const[keyId,setKeyId]=useState<string|number>(-1);
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
        <div>
            {QusBank[page].options.map((option) => (
                    <button  key={option} className={option === keyId ? (select ? "border rounded-md p-3 m-3 bg-green-400" : "border rounded-md p-3 m-3") : "border rounded-md p-3 m-3"}
                     onClick={(e) =>{setValue(option)
                        setSelect(true);
                        setKeyId(option)
                    console.log(e.currentTarget)}}>
                        {option}
                    </button>
            ))
            }
        </div>
           
        {page < QusBank.length-1 ? <button onClick={handleChange} className='border rounded-md bg-green-700 p-1'>Next</button> : 
        <button onClick={handleSub} className='order rounded-md bg-green-700 p-1'>Submit</button> }
        {complete ? <Navigate to="/finalscore"/> : <p></p>}
    </div>
  )
}


