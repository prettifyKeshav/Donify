import React from 'react'
import Image from 'next/image'

const PartnersCard = ({
    userMessage = "",
    userImage,
    userName,
    userDesignation
}) => {
    return (
        <>
            <div className="partners-card">
                <div className="col">
                    <div className="qoma">
                        <Image src="/assets/icon/qoma.svg" height="32" width="43" alt='qoma ico'></Image>
                    </div>
                    <div className="desc">
                        {userMessage}
                    </div>
                </div>

                <div className="col">
                    <figure>
                        <Image src={userImage} height="64" width="64" alt='user img'></Image>
                    </figure>
                    <figcaption>
                        <h4 className='user-name'>{userName}</h4>
                        <p className='user-designation'>{userDesignation}</p>
                    </figcaption>
                </div>
            </div>
        </>
    )
}

export default PartnersCard