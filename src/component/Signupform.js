import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from './firebase' 

const Signupform = () => {
         const navigate = useNavigate()
  const [value, setvalue] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [error, seterror] = useState("")
  const [submit, setsubmit] = useState(false);

  const handlesubmit = () => {
    if (!value.name || !value.email || !value.password) {
      seterror("Please Fill all details");
      return;
    }
    seterror("");

    setsubmit(true)

    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setsubmit(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: value.name,
        })
        navigate("/login")
      })
      .catch((err) => {
        setsubmit(false)
        seterror(err.message)
      })
  }

  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setvalue((prev) => ({ ...prev, name: e.target.value }))} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setvalue((prev) => ({ ...prev, email: e.target.value }))} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setvalue((prev) => ({ ...prev, password: e.target.value }))} />
        </div>
        <div>
          <b className='text-danger'>{error}</b>
        </div>
        <button type="submit" className="btn btn-primary mt-4" onClick={handlesubmit} disabled={submit}>Submit</button>
        <p>Already have an account? {" "}
          <span>
            {/* <Link to="/">Login here</Link> */}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signupform