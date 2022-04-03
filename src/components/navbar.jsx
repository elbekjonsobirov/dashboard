import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CancelIcon from '@mui/icons-material/Cancel';


class Navbar extends Component {
    render() {
        const { MenuActive } = this.props
        return (
            <div className={MenuActive === false ? 'navbar-container' : 'navbar-container navbar-cont-active'}>
                <div className={MenuActive === false ? "navbar-title navbar-title-active" : "navbar-title"}>Sobirov.Dev</div>
                <Stack className='navbar-ul'>
                    <Button className="navbar-li-btn">
                        <SignalCellularAltIcon className='navbar-btn-icon' />
                        <h1 className="navbar-li-name">Dashboard</h1>
                    </Button>
                    <Button className="navbar-li-btn">
                        <PeopleAltIcon className='navbar-btn-icon' />
                        <h1 className="navbar-li-name">Customers</h1>
                    </Button>
                    <Button className="navbar-li-btn">
                        <ShoppingBagIcon className='navbar-btn-icon' />
                        <h1 className="navbar-li-name">Products</h1>
                    </Button>
                    <Button className="navbar-li-btn">
                        <PersonIcon className='navbar-btn-icon' />
                        <h1 className="navbar-li-name">Account</h1>
                    </Button>
                    <Button className="navbar-li-btn">
                        <SettingsIcon className='navbar-btn-icon' />
                        <h1 className="navbar-li-name">Settings</h1>
                    </Button>
                    <Button className="navbar-li-btn">
                        <LockIcon className='navbar-btn-icon' />
                        <h1 className="navbar-li-name">Login</h1>
                    </Button>
                    <Button className="navbar-li-btn">
                        <PersonAddAlt1Icon className='navbar-btn-icon' />
                        <h1 className="navbar-li-name">Register</h1>
                    </Button>
                    <Button className="navbar-li-btn">
                        <CancelIcon className='navbar-btn-icon' />
                        <h1 className="navbar-li-name">Error</h1>
                    </Button>
                </Stack>
            </div>
        );
    }
}

export default Navbar;
