import React from 'react'
import '../styles/Story.css'
import Avatar from '@material-ui/core/Avatar';


const Story = ({ image, profileSrc, title }) => {
    return (
        <div className='story' style={{ backgroundImage: `url(${image})` }}>
            <Avatar src={profileSrc} className="story__avatar" />
            <h4>{title}</h4>
        </div>
    )
}

export default Story