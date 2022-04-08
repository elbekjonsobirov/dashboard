import React, { Component } from 'react';

class Login extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all dashboard-page' : 'home-all-left dashboard-page'}>
                svefe
            </div>
        );
    }
}

export default Login;
