import React, {useState, useEffect } from 'react'
import UserService from '../../services/user.service'

import NavbarAdmin from './../NavbarAdmin.js/NavbarAdmin';
import LoginRequest from './../LoginRequest/LoginRequest';


const BoardAdmin = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    UserService.getAdminBoard().then(
      response => {
        // setContent(<AdminUploadsManagement/>)
        setContent(<NavbarAdmin/>)
      },
      error => {
        setContent(
          <LoginRequest/>
        // (error.response &&
        //   error.response.data &&
        //   error.response.data.message) ||
        //   error.message ||
        //   error.toString()
        )
      }
    )
  }, [])

  return(
    <div>{content}</div>
  ) 
}

export default BoardAdmin
