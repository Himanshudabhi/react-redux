import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
// import { Link } from 'react-router-dom'

export default function LoginForm() {

    // const navigate = useNavigate()
    const [value, setvalue] = useState({
        email: "",
        password: ""
    })
    const [error, seterror] = useState("")
    const [submit, setsubmit] = useState(false);

    const handlesubmit = () => {
        if (!value.email || !value.password) {
            seterror("Please Fill all details");
            return;
        }
        seterror("");

        setsubmit(true)

        signInWithEmailAndPassword(auth, value.email, value.password)
            .then(async () => {
                setsubmit(false);
                // navigate("/home")
            })
            .catch((err) => {
                setsubmit(false)
                seterror(err.message)
            })
    }
    return (
        <div>
            <div className="container mt-5 ">
                <div className="mb-3">
                    <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setvalue((prev) => ({ ...prev, email: e.target.value }))} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setvalue((prev) => ({ ...prev, password: e.target.value }))} />
                </div>
                <div>
                    <b className='text-danger'>{error}</b>
                </div>
                <button type="submit" className="btn btn-primary mt-4" onClick={handlesubmit} disabled={submit}>Login</button>
                <p>Not have an account? {" "}
          <span>
            {/* <Link to="/">Signup here</Link> */}
          </span>
        </p>
            </div>
        </div>
    )
}