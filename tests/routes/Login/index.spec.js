import LoginRoute from 'routes/Login'

describe('(Route) Home', () => {
  let _component

  beforeEach(() => {
    _component = LoginRoute.component()
  })

  it('Should return a route configuration object', () => {
    expect(typeof LoginRoute).to.equal('object')
  })

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
