import React from 'react';
import "../../assets/css/UserDashboard/Membership_Content.css"

function Membership_Content() {
  let user = "User Name";
  return (
    <div className='membership_container'>
      <div className='membership_plan'>
        <p>Hi {user}, you are a member on DjMusic HD</p>
      </div>
      <div className='product'>
        <p>Check your <a href='#'><strong>product</strong></a> and enjoy your Dj's albums</p>
      </div>
    </div>
  )
}

export default Membership_Content