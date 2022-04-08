import React, { Component } from 'react';

class Products extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all dashboard-page' : 'home-all-left dashboard-page'}>
                safsefe
            </div>
        );
    }
}

export default Products;

