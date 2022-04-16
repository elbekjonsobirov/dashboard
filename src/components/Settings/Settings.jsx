import React, { Component } from 'react';
import './style/Settings.scss'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



class Settings extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all' : 'home-all-left'}>
                <div className="settings-page">
                    <div className="settings-ntion">
                        <div className="ntion-title-card">
                            <h1 className="ntion-title">
                                Notifications
                            </h1>
                            <p className="ntion-comment">
                                Manage the notifications
                            </p>
                        </div>
                        <div className="ntion-edit-card">
                            <div className="notifications">
                                <h1 className="notifications-title">
                                    Notifications
                                </h1>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Email" />
                                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Push Notifications" />
                                    <FormControlLabel control={<Checkbox/>} label="Text Messages" />
                                    <FormControlLabel control={<Checkbox/>} label="Phone calls" />
                                </FormGroup>
                            </div>
                            <div className="notifications">
                                <h1 className="notifications-title">
                                    Messages
                                </h1>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox/>} label="Email" />
                                    <FormControlLabel control={<Checkbox/>} label="Push Notifications" />
                                    <FormControlLabel control={<Checkbox/>} label="Phone calls" />
                                </FormGroup>
                            </div>
                        </div>
                        <Stack spacing={2} direction="row" className='settings-save'>
                                <Link to="/dashboard">
                                    <Button variant="contained" className='settings-save-btn'>Save</Button>
                                </Link>
                        </Stack>
                    </div>
                    <div className="settings-ntion">
                        <div className="ntion-title-card">
                            <h1 className="ntion-title">
                                Password
                            </h1>
                            <p className="ntion-comment">
                                Update password
                            </p>
                        </div>
                            <Box
                                className="pass-edit-card"
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off">
                                    <TextField
                                        className='TextField'
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                    />
                                    <TextField
                                        className='TextField'
                                        id="outlined-password-input"
                                        label="Confirm Password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                    />
                            </Box>
                        <Stack spacing={2} direction="row" className='settings-save'>
                                <Link to="/dashboard">
                                    <Button variant="contained" className='settings-save-btn'>Save</Button>
                                </Link>
                        </Stack>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
