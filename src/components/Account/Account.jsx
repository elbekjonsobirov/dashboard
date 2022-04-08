import React, { Component } from 'react';

class Account extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all dashboard-page' : 'home-all-left dashboard-page'}>
                sdfsefes
            </div>
        );
    }
}

export default Account;
