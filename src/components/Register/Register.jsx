import React, { Component } from 'react';

class Register extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all dashboard-page' : 'home-all-left dashboard-page'}>
                dfgfmjfgx
            </div>
        );
    }
}

export default Register;
