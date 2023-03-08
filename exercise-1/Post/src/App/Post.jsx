import React from 'react'
import UserInfo from './UserInfo'

export const Post = ({post}) => {
  return (
    <div>
        <h4>{post.headline}</h4>
        <i>{post.date.toDateString()}</i>
        <p>{post.content}</p>
        <UserInfo 
            name={post.author.fullname} 
            imgURL={post.author.image}
            />
    </div>
  )
}

export default Post