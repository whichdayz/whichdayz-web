import React from 'react';
import { useHistory } from 'react-router';
import { Button, Subtitle, Title } from '../../components'

export default function Home() {
    const history = useHistory()
    return (
        <>
            <div>
                <Subtitle title='welcome freelancer!' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Title title='full website coming soon' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Subtitle title='stay tuned!' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Button title='Go to Profile' onClick={() => history.push('/profile')} />
            </div>
        </>
    )
}