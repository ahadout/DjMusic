import React from 'react';
import "../../assets/css/UserDashboard/AccountDetails_Content.css"

function AccountDetails_Content() {

  let userDetails = {
    userName: "User",
    fullName: "Med Ahd",
    email: "user@email.com",
    password: "**********",
    phone: "(+1) 23-645-212",
    country: "United States of America",
    Language: "English"
  };

  return (
    <div className='account_details_container'>
      <div className='account_details'>
        <div className='detail'>
          <p className='label'>Username:</p>
          <p>{userDetails.userName}</p>
        </div>
        <div className='detail'>
          <p className='label'>Full name:</p>
          <p>{userDetails.fullName}</p>
        </div>
        <div className='detail'>
          <p className='label'>Email:</p>
          <p>{userDetails.email}</p>
        </div>
        <div className='detail'>
          <p className='label'>Password:</p>
          <p>{userDetails.password}</p>
        </div>
        <div className='detail'>
          <p className='label'>Phone:</p>
          <p>{userDetails.phone}</p>
        </div>
        <div className='detail'>
          <p className='label'>Country:</p>
          <p>{userDetails.country}</p>
        </div>
        <div className='detail'>
          <p className='label'>Language:</p>
          <p>{userDetails.Language}</p>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails_Content