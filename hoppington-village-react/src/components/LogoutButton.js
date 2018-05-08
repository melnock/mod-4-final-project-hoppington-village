import React from 'react'

const LogoutButton = (props) => {
  const handleClick = (e) => {
    props.logout()
  }

  return (
    <div >
      <button className="logout" onClick={handleClick}>Logout</button>
    </div>
  )
}

export default LogoutButton
