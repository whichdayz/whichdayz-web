import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Card } from '../../components/Card'


export const UserProfile = () => {

    const { currentUser } = useContext(AuthContext)


    useEffect(() => {
        console.log(currentUser)
    }, [])
    return (
        <>
        <Card
        imageURL={currentUser.photoURL}
        size={'4by2'}
        />
        </>
    )
}