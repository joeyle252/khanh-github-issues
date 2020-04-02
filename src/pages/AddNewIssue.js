import React, {useState} from 'react'

import  { useParams} from 'react-router-dom'

export default function AddNewIssue() {
    const [title,setTitle]=useState ('');
    const [details,setDetails]=useState('');
    let {owner, repos} = useParams();
    return (
        <div>
            <h1> title </h1>
            <textarea onChange={e=>setTitle(e.target.value)}> </textarea>
            <h2> Contents </h2>
            <textarea onChange={e=>setDetails(e.target.value)}> </textarea>
            <div> 
                <button> Khanh check </button>
                {/* <button onClick={()=>{handleSubmitNewIssue}}> Submit </button> */}
            </div>


        </div>
    )
}
