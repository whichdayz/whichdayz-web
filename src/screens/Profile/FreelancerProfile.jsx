import React, { useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Card } from '../../components/Card'
import { Scheduler } from '../../components/Scheduler'

export const FreelancerProfile = () => {

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
        <Scheduler/>
        </>
    )
}
