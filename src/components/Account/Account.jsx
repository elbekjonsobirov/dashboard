import React, { Component } from 'react';
import './style/Account.scss'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import UserPhoto from './img/Chris-Pratt.webp'


class Account extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all' : 'home-all-left'}>
                <div className="account-page">
                    <div className="account-users">
                        <div className="account-img-card">
                             <Stack direction="row" spacing={2}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={UserPhoto}
                                    sx={{ width: 76, height: 76 }}
                                />
                            </Stack>
                        </div>
                        <div className="account-about-card"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
