import React from 'react'
import PropTypes from 'prop-types'
import LadyJustice from './assets/Lady-Justice.png'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div>
    <div className='page-header'>
      <img className='lady-justice' src={LadyJustice}/>
      <h4>Бест Консалтинг</h4>
    </div>
    <div className='container text-center'>
      <div className='page-layout__viewport'>
        {children}
      </div>
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
