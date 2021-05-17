import React from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import UserService from '../../services/user.service'
import { Redirect } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons'

const { confirm } = Modal

const ModalButtonDeleteUser = props => {
  

  function showDeleteConfirm () {
    confirm({
      title: 'Voulez-vous vraiment supprimer votre compte ?',
      icon: <ExclamationCircleOutlined />,
      content: 'Votre profil définitivement supprimé',
      okText: 'Oui',
      okType: 'danger',
      cancelText: 'Annuler',
      onOk () {
        UserService.deleteUser(props.id)
      .then(response => {
        window.location.reload()
        console.log(response.data)
        // return <Redirect to={'/login'} />
        localStorage.removeItem('user')
      })
      .catch(err => {
        console.log(err)
      })
      },
      onCancel () {
        console.log('Cancel')
      }
    })
  }

  return (
    <div>
      <button
        className='btn badge-danger mt-2'
        onClick={e => {
          e.preventDefault()
          showDeleteConfirm()
        }}
        type='dashed'
      >
        {' '}
        Supprimer le profil
      </button>
    </div>
  )
}

export default ModalButtonDeleteUser
