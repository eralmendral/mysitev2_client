import React, { useState } from 'react'
import ParticleEffect from '@Components/Effects/ParticleEffect';
import Header from '@Components/Header/Header';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import StyledTextField from '@Components/Styled/StyledTextField'
import './Login.scss';

function Login() {

  const [ email, setEmail ] = useState('eralmendral@gmail.com')
  const [ password, setPassword ] = useState("")

  return (
    <div>
      <div className="fh gradient" id='login-container'>
        <Header />
        <ParticleEffect />
        <div className="login-form">
          <form >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StyledTextField
                  label="user"
                  type="text"
                  name="user"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} >
                <StyledTextField
                  label="password"
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>

            <Box my={3}>
              <Button
                disableElevation
                color="primary"
                type="submit"
                name="submit"
                disabled={true} >
                Login
            </Button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
