import React from 'react'
import UserInfo from './UserInfo'

export const CommentSection = ({comment}) => {
  return (
    <div>
        <h4>Comment Section</h4>
        <div style={styles.comment}>
            <div>
                <p>{comment.content}</p>
                <i>{comment.date.toDateString()}</i>
            </div>
            <div>
                <UserInfo 
                    name={comment.author.fullname} 
                    imgURL={comment.author.image}
                />
            </div>
        </div>
    </div>
  )
}

const styles = {
    comment: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    }
}

export default CommentSection
