import React, { Component } from 'react';

class Settings extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all dashboard-page' : 'home-all-left dashboard-page'}>
                hjmdfshda
            </div>
        );
    }
}

export default Settings;
