import { useState } from "react";
import "./deposit.css"
import { Maindata } from "./Globaldata";
import { useNavigate } from "react-router-dom";
import { deposit } from './Globaldata';
import { Link } from "react-router-dom";

const Deposit = () => {
    const [input, setinput] = useState(null)
    const [input2, setinput2] = useState(null)
    const[error,seterror]=useState(false)
    const[error2,seterror2]=useState(false)
    const[Mainerror,setMainerror]=useState(false)
    const[wrongAc,setwrongAc]=useState(false)
    const Navigate = useNavigate();

    
    const depositData = () => {
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
            if(data){
                deposit(input,input2)
                Navigate("/dashboard")
            }
            else{
                setwrongAc(true)
                setTimeout(()=>{
                    setwrongAc(false)
                },2000)
            }
            
        }
        else{
            setMainerror(true)
            
            function task(){
                setMainerror(false)
            }
            setTimeout(task,2000);
            
        }
                
    }
        
    return (
        <div className="img-wrapper">
            <div className="box">
            <Link to="/dashboard"><i class="fa fa-arrow-left" aria-hidden="true" id="arrow"></i></Link>
                <h1>Deposit</h1>
                {Mainerror && <p className="main-err">PLz Enter Details !</p>}
                <div className="input-1">
                    {/* <label>AcNo.</label> */}
                    <input
                        type="text"
                        placeholder="Acount No."
                        onChange={(e) => setinput(e.target.value)}
                    />
                    {error &&<p>Plz Enter Account No. !</p>}
                </div>
                <div className="input-2">
                    {/* <label>Amount</label> */}
                    <input
                        type="text"
                        placeholder="Amount"
                        onChange={(e) => setinput2(e.target.value)}
                    />
                    {error2 &&<p>Plz Enter Amount !</p>}
                </div>
                <div>
                    <button onClick={depositData}>Submit</button>
                    {wrongAc &&<p className="match-ac">Plz check AcNo & AcName! </p>}
                      
                </div>
                
            </div>

        </div>
    )
}
export default Deposit;