import React, { Component } from 'react';
import './Style/Register.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SimpleDialogDemo from './gmail/SimpleDialog';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class Register extends Component {
    state = {
        registerChecked: false
    }

    RegisterCheckFunction = () => {
        const {registerChecked} = this.state
        this.setState ({
            registerChecked: !registerChecked
        })
        console.log(registerChecked)
    }
    
    
    render() {
        const {MenuActive} = this.props
        const {registerChecked} = this.state
        return (
            <div className={MenuActive === true ? 'home-all' : 'home-all-left'}>
                <div className="register-page">
                    <div className="register-card">
                        <Link to="/dashboard" className='register-back'>
                            <ArrowBackIcon className='register-icon-back'/>
                            Dashboard
                        </Link>
                        <h1 className="register-title">
                        Create a new account
                        </h1>
                        <p className="register-comment">
                        Use your email to create new account
                        </p>
                        <Box className='register-miu'
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField className='TextField' required id="outlined-basic" label="First name" variant="outlined" />
                            <TextField className='TextField' required id="outlined-basic" label="Last name" variant="outlined" />
                            <TextField className='TextField' required id="outlined-basic" label="Email address" variant="outlined" />
                            <TextField className='TextField' required id="outlined-basic" label="Password" variant="outlined" />
                        </Box>
                        <div className="register-checkbox-card">
                            <Checkbox {...label} onChange={this.RegisterCheckFunction}/>
                            I have read the 
                            <SimpleDialogDemo />
                        </div>
                        <Stack className='register-stack' spacing={2} direction="row">
                            <Button className='register-button' variant="contained"
                            disabled={!registerChecked}
                            >Sign Up</Button>
                        </Stack>
                        <h1 className="register-login">
                            Have an account?
                            <Link to="/login" className='register-login-link'>
                                Sign in
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
