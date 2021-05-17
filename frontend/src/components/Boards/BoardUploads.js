import React, { useState, useEffect } from 'react'
import UserService from '../../services/user.service'
import AddUpload from './../Uploads/AddUpload';
import LoginRequest from './../LoginRequest/LoginRequest';

const BoardUploads = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    UserService.getUploadsBoard().then(
      response => {
        setContent(<AddUpload/>)
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

  return (
    <div>{content}</div>
  )
}

export default BoardUploads
