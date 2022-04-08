import React, { Component } from 'react';

class Customers extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all dashboard-page' : 'home-all-left dashboard-page'}>
                scsefse
            </div>
        );
    }
}

export default Customers;
