import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Card } from '../../components/Card'
import { Schedule } from '../../components/Schedule'

export const FreelancerProfile = () => {

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        console.log('current user data', currentUser)
    }, [])

    return (
        <>
        <Card
        imageURL={currentUser.photoURL}
        size={'3by2'}
        name={currentUser.displayName}
        title={currentUser.email}
        description={currentUser.i.D}
        />
        <Schedule/>
        </>
    )
}
