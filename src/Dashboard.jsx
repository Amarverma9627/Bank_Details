import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Maindata } from "./Globaldata"


const Dashboard = () => {
    const [data, setdata] = useState([])
    let Navigate=useNavigate();
    useEffect(() => {
        setdata(Maindata)
    }, [])

    let home=()=>Navigate("/")

    let click = (val) => {
        if(val==='All-data'){
            setdata(Maindata)
        }
        else{
            let res = Maindata.filter((item) => {
    
                if(item.AcType.includes(val)) {
                    return item;
                }
            })        
        setdata(res);
        }
    }

    return (
        <div className="main-border">
            <div className="circle">
                
            </div>
            <div className="circle one">
                
                </div>
                <div className="circle two">
                
                </div>
                
            <div className="main-header">
            <div className="home">
                <i onClick={home} class="fa fa-home" aria-hidden="true"></i>
                </div>
                <Link to="/createAc" className="link"><p>CreateA/C</p></Link>
                <Link to="/deposit" className="link"><p>Deposit</p></Link>
                <Link to="/widthdraw" className="link"><p>Withdraw</p></Link>
            </div>
            <div className="detail-flex">
                <div className="type-ac" >
                    <button onClick={()=>click('All-data')}>All Data</button>
                    <button onClick={() => click('savingAc')}>SavingAc</button>
                    <button onClick={() => click('salaryAc')} >SalaryAc</button>
                    <button onClick={() => click('currentAc')}>CurrentAc</button>
                </div>
                <div>
                    <table className="table" >
                        <thead >
                            <div className="head">
                                <tr >
                                    <th>Name</th>
                                    <th>AcNo</th>
                                    <th>AcType</th>
                                    <th>InitialAc</th>
                                </tr>
                            </div>
                        </thead>
                        <tbody  >
                            <div className="body">
                                {data.map((item, index) =>
                                    <tr key={index} className="row" >
                                        <td>{item.name}</td>
                                        <td>{item.AcNo}</td>
                                        <td>{item.AcType}</td>
                                        <td>{item.InitialAm}</td>
                                    </tr>
                                )
                                }
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;