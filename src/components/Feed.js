import React, { useState, useEffect } from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import '../styles/Feed.css'
import db from '../firebase'


// "https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
// https://code.org/shared/images/social-media/codeorg2019_social.png


const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))))
    }, [])
    console.log(posts);
    return (
        <div className='feed'>
            {/* story reel */}
            <StoryReel />

            {/* message sender */}
            <MessageSender />
            {posts?.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

        </div>
    )
}

export default Feed