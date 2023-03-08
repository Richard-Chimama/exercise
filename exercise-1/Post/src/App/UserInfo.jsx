import React from 'react'

export const UserInfo = ({name, imgURL}) => {
  return (
    <div>
        <h4>{name}</h4>
        <img src={imgURL} style={styles.image} alt="user avatar" />
    </div>
  )
}

const styles = {
    image:{
        height: '50px'
    }
}
export default UserInfo
