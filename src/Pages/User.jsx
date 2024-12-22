import React from 'react'
import ReusableBanner from '../Components/ReusableBanner'
import UserDashboard from '../Components/Routes/User/UserDashboard'

const User = () => {
  return (
    <>
        <ReusableBanner PageHeader={"User Dashboard"}/>
        <UserDashboard />
    </>
  )
}

export default User
