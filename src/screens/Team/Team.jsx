import React from 'react' 
import { teamArr } from '../../data/data'
import { Card, Title }  from '../../components'




export default function Team() {
    return (
        <div class='is-columned'>
        <>
            <Title
            size='1'
            title='Meet the Team'
            alignment='centered'
            fontFamily='sans-serif'
            transformation='capitalized'
            color='success'
            />
        </>
        <div class='is-flex'>
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
        </div>
    )
}




