import React, { Component } from 'react';

class Products extends Component {
    render() {
        const {MenuActive} = this.props
        return (
            <div className={MenuActive === true ? 'home-all' : 'home-all-left'}>
                safsefe
            </div>
        );
    }
}

export default Products;

