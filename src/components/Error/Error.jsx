import React, { Component } from 'react';
import './style/Error.scss'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {Link} from 'react-router-dom'
import img from './img/Frame.png'

class Error extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all' : 'home-all-left'}>
                <div className="error-page">
                    <h1 className="error-title">
                        404: The page you are looking for isn’t here
                    </h1>
                    <p className="error-comment">
                        You either tried some shady route or you came 
                        here by mistake. Whichever it is, try using the navigation
                    </p>
                    <div className="error-img-card">
                        <img src={img} alt="" className="error-img" />
                    </div>
                    <Stack spacing={2} direction="row" className='error-btn-card'>
                        <Link to="/dashboard">
                            <Button variant="contained" className='error-btn'>
                                <ArrowBackOutlinedIcon />
                                Go back to Dashboard
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </div>
        );
    }
}

export default Error;
