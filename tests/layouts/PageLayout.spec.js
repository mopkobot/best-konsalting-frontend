import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it('renders as a <div>', () => {
    shallow(<PageLayout />).should.have.tagName('div')
  })

  it('Renders an lady justice image', () => {
    const ladyJustice = shallow(<PageLayout />).find('img')
    expect(ladyJustice).to.exist()
  })

  it('renders a project title', () => {
    shallow(<PageLayout />).find('h4').should.have.text('Бест Консалтинг')
  })

  it('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )
      .find('.page-layout__viewport')
      .should.contain(<Child />)
  })
})
