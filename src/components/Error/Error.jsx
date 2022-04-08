import React, { Component } from 'react';

class Error extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all dashboard-page' : 'home-all-left dashboard-page'}>
                svcsdcsd
            </div>
        );
    }
}

export default Error;
