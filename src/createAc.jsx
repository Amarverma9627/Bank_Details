import { useEffect, useState } from "react";
import "./newAc.css";
import { Maindata } from "./Globaldata.jsx";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

const NewAc = () => {
    const [input, setinput] = useState('')
    const [input2, setinput2] = useState('')
    const [input3, setinput3] = useState('')
    const [val, setval] = useState()
    const [detail, setdetail] = useState(false)
    const [error, seterror] = useState(false)
    const [error2, seterror2] = useState(false)
    const [error3, seterror3] = useState(false)
    const Navigate = useNavigate();
    console.log(input, input2, input3, val)

    
    const sub = () => {
        if (input === '') {
            seterror(true)
        }
        else {
            seterror(false)
        }

        if (input3 === '') {
            seterror3(true)
        }
        else {
            seterror3(false)
        }

        if (input2 === '') {
            seterror2(true)
        }
        else {
            seterror2(false)
        }
        if (input !== '' && input2 !== '' && input3 !== '') {
            let obj = {
                name: input,
                AcNo: input2,
                AcType: val,
                InitialAm: input3
            }
            Maindata.push(obj)
            Navigate("/dashboard")
        }
        else {
            setdetail(true)
            setTimeout(()=>{
                setdetail(false)
            },2000)
        }
    }


    return (
        <div className="relate">
            <div className="main-box">
            <Link to="/dashboard"><i class="fa fa-arrow-left" aria-hidden="true" id="arrow"></i></Link>
                <p className="new">Create New Ac </p>
                {detail && <p className="text-detail">⚠ Plz Enter Details !</p>}
                <div className="all-item">
                    <div className="input-1">
                        {/* <label>Name</label> */}
                        <input
                            type="text" placeholder="Name"
                            onChange={(e) => setinput(e.target.value)}
                        />
                        {error && <p>Plz Enter Name !</p>}
                    </div>
                    <div className="input-2">

                        {/* <label>AcNo</label> */}
                        <input
                            type="Number" placeholder="Ac.no."
                            onChange={(e) => setinput2(e.target.value)}
                        />
                        {error2 && <p>Plz Enter Account No. !</p>}
                    </div>
                    <div className="input-3">

                        {/* <label>Amount</label> */}
                        <input
                            type="number" placeholder="InitialAmt."
                            onChange={(e) => setinput3(e.target.value)}
                        />
                        {error3 && <p>Plz Enter Amount !</p>}
                    </div>

                    <div className="slt">
                        <select className=""
                            onChange={(e) => setval(e.target.value)}>
                            <option value="Ac">All</option>
                            <option value="savingAc" >savingAc</option>
                            <option value="currentAc">currentAc</option>
                            <option value="salaryAc">salaryAc</option>
                        </select>
                    </div>

                    <button onClick={sub}>Submit</button>
                    
                </div>
            </div>
        </div>
    )
}
export default NewAc;