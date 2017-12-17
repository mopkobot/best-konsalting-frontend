import React from 'react'
import { LoginView } from 'routes/Login/components/LoginView'
import { render } from 'enzyme'

describe('Login', () => {
  let _component

  beforeEach(() => {
    _component = render(<LoginView />)
  })

  it('Renders an lady justice image', () => {
    const ladyJustice = _component.find('img')
    expect(ladyJustice).to.exist()
  })
})
