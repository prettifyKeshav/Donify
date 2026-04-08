import MainTemplates from '@/src/components/templates/MainTemplates'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <MainTemplates>
        {children}
      </MainTemplates>
    </>
  )
}

export default Layout