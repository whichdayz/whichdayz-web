import React from 'react' 
import { teamArr } from '../../data/data'
import {Card} from '../../components/shared/Card'




export default function Team() {
    return (
        <div class='container is-centered'>
            {teamArr.map(profile => {
                return (
                    <Card
                        size='4by3'
                        description={profile.description}
                        title={profile.title}
                        name={profile.name}
                        imageURL={profile.imageURL}
                    />
                )
            })}
        </div>
    )
}




