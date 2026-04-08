import NgoTemplate from '@/src/components/templates/NgoTemplate'
import React from 'react'

const NgoLayout = ({ children }) => {
    return (
        <>
            <NgoTemplate>
                {children}
            </NgoTemplate>
        </>
    )
}

export default NgoLayout