import MainTemplates from '@/src/components/templates/MainTemplates'
import React from 'react'


const MainLayout = ({ children }) => {
  return (
    <>
      <MainTemplates>
        {children}
      </MainTemplates>
    </>
  )
}

export default MainLayout