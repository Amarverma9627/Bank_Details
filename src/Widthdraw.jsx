import "./widthdraw.css"
import { Maindata } from "./Globaldata";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {Widthdraw2} from "./Globaldata.jsx"

const Widthdraw = () => {
    const [input, setinput] = useState(null)
    const [input2, setinput2] = useState(null)
    const[error,seterror]=useState(false)
    const[error2,seterror2]=useState(false)
    const[Mainerror,setMainerror]=useState(false)
    const Navigate=useNavigate();
    // const [sum, setsum] = useState([])
    console.log(input, input2)
    
    const submit = () => {
        if(input===null){
            seterror(true)
        }
        else{
            seterror(false)
        }

        if(input2===null){
            seterror2(true)
        }
        else{
            seterror2(false)
        }
        if(input!==null && input2!==null){
            let data=Maindata.some((item)=>item.AcNo==input)
            if(data)
            Widthdraw2(input,input2)
            Navigate("/dashboard")
        }
        else{
            setMainerror(true)
        }
        
    }

    return (
        <div className="img-wrapper2">
            
            <div   className="boxx">
                <h2>Widthdraw</h2>
                {Mainerror && <p className="main-err">PLz Enter Details !</p>}
                <div className="input-1">
                    <label>AcNo.</label>
                    <input
                        type="text"
                        placeholder="Acount No."
                        onChange={(e) => setinput(e.target.value)}
                    />
                    {error &&<p>Plz Enter Account No. !</p>}
                </div>
                <div className="input-2">
                    <label>Amount</label>
                    <input
                        type="text"
                        placeholder="Amount"
                        onChange={(e) => setinput2(e.target.value)}
                    />
                    {error2 &&<p>Plz Enter Amount !</p>}
                </div>
                <div>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>

        </div>
    )
}
export default Widthdraw;