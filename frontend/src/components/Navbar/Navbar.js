import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import ModalButtonAddUploads from '../ModalButton/ModalButtonAddUpload'
import { useSelector } from 'react-redux'
import UserService from '../../services/user.service'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import jwt_decode from 'jwt-decode'

const Navbar = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)

  const currentUser = useSelector(state => state.authReducer).user

  const logOut = e => {
    e.preventDefault()
    AuthService.logout()
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      UserService.getUser(currentUser.id).then(response => {
        console.log(response.data.comments)
        // return response.data
        // setCurrentUser(response.data)
      })
    }

    if (user) {
      // setCurrentUser(user)
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }
  }, []) //mettre currentUser dans les crochets

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-groupomania fixed-top '>
        <NavLink to={'/'} className='navbar-brand navbar-groupomania-brand'>
          Groupomania
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item' >
              <NavLink to={'/home'} className='nav-link nav-link-groupomania'>
                Accueil
              </NavLink>
            </li>
            {showModeratorBoard && (
              <li className='nav-item'>
                <NavLink to={'/mod'} className='nav-link nav-link-groupomania'>
                  Modérateur
                </NavLink>
              </li>
            )}
            {showAdminBoard && (
              <li className='nav-item' >
                <NavLink
                  to={'/admin'}
                  className='nav-link nav-link-groupomania'
                >
                  Administrateur
                </NavLink>
              </li>
            )}
            {currentUser && (
              <li className='nav-item'>
                <ModalButtonAddUploads />
              </li>
            )}
          </ul>
          {currentUser ? (
            <div className='navbar-nav ml-auto'>
              <li className='nav-item dropdown mr-4'>
                <button
                  className='btn dropdown-toggle'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <AccountCircleIcon/>
                </button>
                <div
                  className='dropdown-menu dropdown-menu-right'
                  aria-labelledby='navbarDropdown'
                >
                  <NavLink
                    to={'/profile'}
                    className='nav-link nav-link-groupomania dropdown-item p-2'
                  >
                    Accéder au profil
                  </NavLink>
                  <div className='dropdown-divider'></div>
                  <NavLink
                    exact
                    to={'/login'}
                    className='nav-link nav-link-groupomania dropdown-item p-2'
                    onClick={logOut}
                  >
                    Se déconnecter
                  </NavLink>
                </div>
              </li>
            </div>
          ) : (
            <div className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink
                  exact
                  to={'/login'}
                  className='nav-link nav-link-groupomania'
                >
                  Se connecter
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  exact
                  to='register'
                  className='nav-link nav-link-groupomania'
                >
                  S'inscrire
                </NavLink>
              </li>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar

// import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import AuthService from '../../services/auth.service'
// import ModalButtonAddUploads from '../ModalButton/ModalButtonAddUpload'
// import { useSelector } from 'react-redux'
// import UserService from '../../services/user.service'
// import jwt_decode from 'jwt-decode'

// const Navbar = () => {
//   const user = JSON.parse(localStorage.getItem('user'))

//   const decodedUser = user
//     ? { user: jwt_decode(user.accessToken) }
//     : { user: null }

//   // const user = JSON.parse(localStorage.getItem('user'))
//   // const decodedUser = jwt_decode(user.accessToken)

//   const [showModeratorBoard, setShowModeratorBoard] = useState(false)
//   const [showAdminBoard, setShowAdminBoard] = useState(false)
//   const [currentUser, setCurrentUser] = useState(decodedUser)

//   console.log("Voici le current user ", currentUser);

//   // const currentUser = useSelector(state => state.authReducer).user

//   const logOut = e => {
//     e.preventDefault()
//     AuthService.logout()
//   }

//   useEffect(() => {
//     // const user = AuthService.getCurrentUser()

//     UserService.getUser(currentUser.id).then(response => {
//       // console.log(response.data.comments)
//       // return response.data
//       setCurrentUser(response.data)
//     })

//     if (user) {
//       setCurrentUser(user)
//       setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
//       setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
//     }
//   }, []) //mettre currentUser dans les crochets

//   return (
//     <>
//       <nav className='navbar navbar-expand fixed-top navbar-groupomania'>
//         <div className='container-fluid'>
//           <NavLink to={'/'} className='navbar-brand navbar-groupomania-brand'>
//             Groupomania
//           </NavLink>
//           <div className='navbar-nav mr-auto'>
//             <li className='nav-item'>
//               <NavLink to={'/home'} className='nav-link nav-link-groupomania'>
//                 Accueil
//               </NavLink>
//             </li>

//             {showModeratorBoard && (
//               <li className='nav-item'>
//                 <NavLink to={'/mod'} className='nav-link nav-link-groupomania'>
//                   Modérateur
//                 </NavLink>
//               </li>
//             )}

//             {showAdminBoard && (
//               <li className='nav-item'>
//                 <NavLink
//                   to={'/admin'}
//                   className='nav-link nav-link-groupomania'
//                 >
//                   Administrateur
//                 </NavLink>
//               </li>
//             )}

//             {currentUser && (
//               <li className='nav-item'>
//                 <ModalButtonAddUploads />
//               </li>
//               //   <li className='nav-item'>
//               //   <NavLink
//               //     to={'/uploads'}
//               //     className='nav-link nav-link-groupomania'
//               //   >
//               //     + Upload
//               //   </NavLink>
//               // </li>
//             )}
//           </div>

//           {currentUser ? (
//             <div className='navbar-nav ml-auto'>
//               <li className='nav-item'>
//                 <NavLink
//                   to={'/profile'}
//                   className='nav-link nav-link-groupomania'
//                 >
//                   {currentUser.firstName + ' ' + currentUser.lastName}
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink
//                   exact
//                   to={'/login'}
//                   className='nav-link nav-link-groupomania'
//                   onClick={logOut}
//                 >
//                   Se déconnecter
//                 </NavLink>
//               </li>
//             </div>
//           ) : (
//             <div className='navbar-nav ml-auto'>
//               <li className='nav-item'>
//                 <NavLink
//                   exact
//                   to={'/login'}
//                   className='nav-link nav-link-groupomania'
//                 >
//                   Se connecter
//                 </NavLink>
//               </li>

//               <li className='nav-item'>
//                 <NavLink
//                   exact
//                   to='register'
//                   className='nav-link nav-link-groupomania'
//                 >
//                   S'inscrire
//                 </NavLink>
//               </li>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar
