import React from 'react'
import './LoginView.scss'

export const LoginView = () => (
  <div>
    <div data-qa='login-form'>
      <div data-qa='username'><label>Корисничко име:</label></div>
      <div data-qa='password'><label>Лозинка:</label></div>
      <button>Логирај се</button>
    </div>
  </div>
)

export default LoginView
