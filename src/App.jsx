import { useState } from 'react'

import { useNavigate } from "react-router-dom"

let data = {
  name: 'amar',
  pass: 123
}

function App() {
  const [input, setinput] = useState('')
  const [input2, setinput2] = useState('')
  const [sms, setsms] = useState(false)
  const [sms2, setsms2] = useState(false)
  const [invalid, setinvalid] = useState(false)
  const Navigate = useNavigate();
  // const [border, setborder] = useState(false)

  let submit = () => {
    if (input !== '') {
      setsms(false)
      if (data.name == input && data.pass == input2) {
        setinvalid(false)
        Navigate('/dashboard')

      }
      else {
        setinvalid(true)
        setTimeout(() => {
          setinvalid(false)
        }, 2000)
      }
    }
    else {
      setsms(true)


    }

    if (input2 !== '') {
      setsms2(false)
    }
    else {

      setsms2(true)
      setinvalid(false)
    }
  }
  return (
    <div className='main'>
      <div>
        <video className='vdo' autoPlay muted loop>
          <source src='color2.mp4' />
        </video>
        <div className='layer'></div>
      </div>
      <div className='header'>
        <p className='log'>Sign-in</p>
        {invalid && <p className=' text-c'>Invalid Name & Password ! </p>}

        <div className='input1'>
          <input type='text' placeholder='' onChange={(e) => setinput(e.target.value)} />
          <label>Name</label>
          {sms && <p className='text-a'>Plz enter name !</p>}
        </div>

        <div className='input2'>
          <input type='password' placeholder='' required="requrired" onChange={(e) => setinput2(e.target.value)} />
          <label>Password</label>
          {sms2 && <p className='text-b'>Plz enter password !</p>}
        </div>
        <div className='btn-container'>
          <button onClick={submit}>Submit</button><br></br>
        </div>
      </div>
    </div>
  )
}
export default App;
