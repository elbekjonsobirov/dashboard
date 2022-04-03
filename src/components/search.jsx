import React, { Component } from 'react';
import { SearchOutlined, PeopleAltSharp, NotificationsSharp } from '@mui/icons-material'
import { Avatar, Stack } from '@mui/material';
import UserPhoto from '../img/Chris-Pratt.webp'
class Search extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === false ? 'search-container' : 'search-container search-cont-active'}>
                <form action="" className="search-section">
                    <SearchOutlined className='search-icons'/>
                    <input type="search" name="" id="" className="search-input" placeholder='Search' />
                </form>
                    <Stack className='search-users' direction="row" spacing={2}>
                        <a href="">
                        <PeopleAltSharp className='users-icons'/>
                       </a>
                        <a href="">
                        <NotificationsSharp className='users-icons'/>
                        </a>
                        <a href="">
                        <Avatar alt="Cindy Baker" src={UserPhoto} />
                        </a>
                    </Stack>
            </div>
        );
    }
}

export default Search;
