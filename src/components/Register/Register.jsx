import React, { useState } from 'react'


const Register = () => {
  
  const [user, setUser] = useState({
    email: "",
    password:"",
    password2:""
  })
  
  const handleSubmit = (e) => {
     e.preventDefault()
     
     const validation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    if (user.password !== user.password2) {
      alert ("las contraseñas no coinciden")
      return
     }
     if (!validation.test(user.password)) {
      alert("ingrese un contraseña valida")
      return
     }
    delete user.password2
     
    fetch('http://localhost:8080/user', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8'     
      }
     })
     .then((res => res.json()))
     .then((res) => console.log(res))
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
          <h2>Registrarme</h2>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                   <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                 </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" name='password' onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                  <label htmlFor="exampleInputPassword2" className="form-label">Repetir password</label>
                  <input type="password" name='password2' onChange={handleChange} className="form-control" id="exampleInputPassword2"/>
                </div>
                
                  <button type="submit" className="btn btn-primary">Submit</button>
          </form>
         </div>
      </div>
    </div>
  )
}

export default Register