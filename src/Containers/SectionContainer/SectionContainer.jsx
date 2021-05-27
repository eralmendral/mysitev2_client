import React from 'react'
import './SectionContainer.scss'

function SectionContainer({ children, title, theme }) {
  return (
    <div className={`sectionContainer ${theme === 'dark' ? 'sectionDark' : 'sectionLight'}`}>
      <h3 className="sectionTitle">{title}</h3>
      <div className="section">
        {children}
      </div>
    </div>
  )
}

export default SectionContainer
