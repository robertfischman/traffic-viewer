import React from 'react'
import { Button } from 'react-md'

const SignIn = ({ onSignIn }) => (
  <div>
    <Button primary onClick={() => onSignIn()} raised>
      Sign in to your GitHub account
    </Button>
    <p style={{ marginTop: 20 }}>
      You will get redirected to GitHub to grant access to read the traffic
      information from your repositories.
    </p>
  </div>
)

export default SignIn
