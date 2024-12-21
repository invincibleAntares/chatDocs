import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
function Navbar() {
  return (
    <div>Navbar
        <LoginLink>Sign in</LoginLink>

<RegisterLink>Sign up</RegisterLink>
    </div>
  )
}

export default Navbar