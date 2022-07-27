import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login= () => {
  let navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password:""
  })
  
  const handleSubmit = (e) => {
     e.preventDefault()
     console.log(user)
     
   fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8'     
      }
     })
     .then((res => res.json()))
     .then(res => {
      if (res.token === undefined) {
        alert("usuario o contraseña incorrecta")
      }else{
        localStorage.setItem("token", res.token)
        navigate('/')
      }
     })
  }

  const handleChange = ({target}) => {

    setUser({
      ...user,
      [target.name] : target.value
    })

  }
  
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center vh-100'>
         <div className='col-6'>
          <h2>Ingresar</h2>
         
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                   <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={handleChange} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
                
                 </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" name='password'onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
           
                </div>
                
                  <button type="submit" className="btn btn-primary">Submit</button>
          </form>
         </div>
      </div>
    </div>
  )
}

export default Login