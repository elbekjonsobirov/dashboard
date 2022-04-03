import React, { Component } from 'react';
import {pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import Example from './charts/Example';


class Dashboard extends Component {
    render() {
        const { MenuActive } = this.props
        return (
            <div className={MenuActive === true ? 'home-all dashboard-page' : 'home-all-left dashboard-page'}>
                <div className="dashboard-cards">
                    <div className="dashboard-cards-box">
                        <div className="cards-box-title">
                            <h1 className="cards-box-title-name">BUDGET</h1>
                            <h1 className="cards-title-size">$24k</h1>
                        </div>
                        <Stack direction="row" spacing={2} className='cards-box-stack'>
                            <Avatar sx={{ bgcolor: pink[500] }} className='cards-box-avatar' id='cards-box-avatar-1'>
                                <MoneyRoundedIcon className='cards-box-icon'/>
                            </Avatar>
                        </Stack>
                        <div className="cards-box-comments">
                            <ArrowLeftIcon className='cards-bottom-icon'/>
                            12% <span>Since last month</span>
                        </div>
                    </div>
                    <div className="dashboard-cards-box">
                    <div className="cards-box-title">
                            <h1 className="cards-box-title-name">TOTAL CUSTOMERS</h1>
                            <h1 className="cards-title-size">1,6k</h1>
                        </div>
                        <Stack direction="row" spacing={2} className='cards-box-stack'>
                            <Avatar sx={{ bgcolor: pink[500] }} className='cards-box-avatar' id='cards-box-avatar-2'>
                                <PeopleAltRoundedIcon className='cards-box-icon'/>
                            </Avatar>
                        </Stack>
                        <div className="cards-box-comments">
                            <ArrowLeftIcon className='cards-bottom-icon'/>
                            12% <span>Since last month</span>
                        </div>
                    </div>
                    <div className="dashboard-cards-box">
                    <div className="cards-box-title">
                            <h1 className="cards-box-title-name">TASKS PROGRESS</h1>
                            <h1 className="cards-title-size">75.5%</h1>
                        </div>
                        <Stack direction="row" spacing={2} className='cards-box-stack'>
                            <Avatar sx={{ bgcolor: pink[500] }} className='cards-box-avatar' id='cards-box-avatar-3'>
                                <InsertChartOutlinedIcon className='cards-box-icon'/>
                            </Avatar>
                        </Stack>
                        <div className="cards-box-progress">
                            <div className="cards-box-progress-active"></div>
                        </div>
                    </div>
                    <div className="dashboard-cards-box">
                    <div className="cards-box-title">
                            <h1 className="cards-box-title-name">TOTAL PROFIT</h1>
                            <h1 className="cards-title-size">$23k</h1>
                        </div>
                        <Stack direction="row" spacing={2} className='cards-box-stack'>
                            <Avatar sx={{ bgcolor: pink[500] }} className='cards-box-avatar' id='cards-box-avatar-4'>
                                <MonetizationOnSharpIcon className='cards-box-icon'/>
                            </Avatar>
                        </Stack>
                        <div className="cards-box-comments">
                            <ArrowLeftIcon className='cards-bottom-icon'/>
                            12% <span>Since last month</span>
                        </div>
                    </div>
                </div>
                <div className="all-charts">
                    <div className="diagram-charts-card">
                        <div className="diagram-charts-header">
                            <h1 className="diagram-charts-title">Latest Sales</h1>
                            <select name="" id="">
                                <option value="">Last 7 days</option>
                                <option value="">Last 1 month</option>
                                <option value="">Last 1 year</option>
                            </select>
                        </div>
                        <div className="PureComponent-section">
                            <Example/>
                        </div>
                    </div>
                    <div className="circle-charts-card">ascsa</div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
