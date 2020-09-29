import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Card } from '../../components/Card'


export const UserProfile = () => {

    const { currentUser } = useContext(AuthContext)


    useEffect(() => {
        console.log('current user data', currentUser)
    }, [])

    return (
        <>
        <Card
        imageURL={currentUser.photoURL}
        size={'4by3'}
        name={currentUser.displayName}
        title={currentUser.email}
        description={currentUser.i.D}
        />
        </>
    )
}