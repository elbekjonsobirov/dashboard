import React, { Component } from 'react';

class Customers extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all' : 'home-all-left'}>
                scsefse
            </div>
        );
    }
}

export default Customers;
