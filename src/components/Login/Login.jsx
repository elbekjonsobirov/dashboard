import React, { Component } from 'react';
import './style/Login.scss'
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Facebook from './network/Facebook';
import Gmail from './network/Gmail';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Stack, Button} from '@mui/material/'

class Login extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all' : 'home-all-left'}>
                <div className="login-page">
                    <div className="login-card">
                        <Link to="/dashboard" className='login-back'>
                            <ArrowBackIcon className='login-icon-back'/>
                            Dashboard
                        </Link>
                        <h1 className="login-title">
                        Sign in
                        </h1>
                        <p className="login-comment">
                        Sign up on the internal platform
                        </p>
                        <div className="login-network">
                            <Facebook />
                            <Gmail />
                        </div>
                        <p className="login-text">
                            or login with email address
                        </p>
                         <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            className='login-mui'
                        >
                            <TextField
                                required
                                id="outlined-required"
                                label="email"
                                type="email"
                                className='login-input'
                                />
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                className='login-input'
                            />
                        </Box>
                        <Stack className='login-stack' spacing={2} direction="row">
                            <Button className='login-button' variant="contained"
                            >Sign Up</Button>
                        </Stack>
                        <h1 className="login-login">
                            Don’t have an account?
                            <Link to="/register" className='login-login-link'>
                                Sign up
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
