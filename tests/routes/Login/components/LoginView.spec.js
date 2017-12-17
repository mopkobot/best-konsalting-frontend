import React from 'react'
import { LoginView } from 'routes/Login/components/LoginView'
import { render } from 'enzyme'

describe('Login', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = render(<LoginView />)
  })

  it('Renders login form with password, username and login button', () => {
    const loginForm = renderedComponent.find('[data-qa="login-form"]')
    expect(loginForm).to.exist()
    expect(loginForm.find('[data-qa="username"]')).to.exist()
    expect(loginForm.find('[data-qa="username"]')).text().to.contain('Корисничко име:')
    expect(loginForm.find('[data-qa="password"]')).to.exist()
    expect(loginForm.find('[data-qa="password"]')).text().to.contain('Лозинка:')
    expect(loginForm.find('button')).to.exist()
    expect(loginForm.find('button')).text().to.contain('Логирај се')
  })
})
