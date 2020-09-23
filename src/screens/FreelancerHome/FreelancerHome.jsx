import React from 'react';
import { Subtitle, Title } from '../../components'

export default function Home() {
    return (
        <>
            <div>
                <Subtitle title='welcome freelancer!' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Title title='full website coming soon' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Subtitle title='stay tuned!' alignment='centered' color='primary' size={1} transformation='uppercase'/>
            </div>
        </>
    )
}