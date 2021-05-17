import React, { useState } from 'react'


// import AuthService from '../../services/auth.service'
import { Link } from 'react-router-dom'

// const required = value => {
//   if (!value) {
//     return (
//       <div className='alert alert-danger' role='alert'>
//         Ce champ est requis !
//       </div>
//     )
//   }
// }

const LoginRequest = props => {
  // const form = useRef()
  // const checkBtn = useRef()

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  // const [message, setMessage] = useState('')

  // const onChangeEmail = e => {
  //   e.preventDefault()
  //   setEmail(e.target.value)
  // }

  // const onChangePassword = e => {
  //   e.preventDefault()
  //   setPassword(e.target.value)
  // }

  // const handleLogin = e => {
  //   e.preventDefault()
  //   setLoading(true)
  //   setMessage('')

  //   form.current.validateAll()

  //   if (checkBtn.current.context._errors.length === 0) {
  //     AuthService.login(email, password).then(
  //       () => {
  //         props.history.push('/profile')
  //         window.location.reload()
  //       },
  //       error => {
  //         const resMessage =
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString()

  //         setLoading(false)
  //         setMessage(resMessage)
  //       }
  //     )
  //   } else {
  //     setLoading(false)
  //   }
  // }

  return (
    <div className='container'>
      <div className='left'>
        
        <div className='header'>
          <h2 className='animation a1'>
            Vous devez vous connecter pour accéder à ce contenu !
          </h2>
          <h4 className='animation a2'>
            Rendez-vous sur la page de connexion.
          </h4>
        </div>
        <button className='animation a5 btn-model' disabled={loading}>
            {loading && (
              <span className='spinner-border spinner-border-sm'></span>
            )}
            <Link to="/login" style={{ textDecoration: 'none' }}><span style={{ color: 'white' }}>Se connecter</span></Link>
          </button>
      </div>
      <div className='right-login-request'></div>
    </div>
  )
}

export default LoginRequest
